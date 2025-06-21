import importTemplate from '../../utils/importTemplate.js'
import inlinesvg from '../../utils/inlinesvg.js'

export default {
    data() {
        return {
            hoverGoBack: false,
            hoverItemBoxRight: {},
            hoverClaim: false,
            progressBar: false,
            showGetBattlepass: false,
            battlepassMissionProgress: {},
            battlepassLevelProgress: false,
            selectedItem: false,
            tbxId : '',
        }
    },
    components: {
        inlinesvg
    },
    methods: {
        ...Vuex.mapMutations({
            setActivePage: 'setActivePage',
        }),
        selectItem(payload){
            if(this.selectedItem.level == payload.level){
                this.selectedItem = false

            }else{
                this.selectedItem = payload
            }
        },   
        ClaimBattlepassItem(){

            postNUI('ClaimBattlepassItem', {item : this.selectedItem})
        },
        verifyTbxId(){
            postNUI('verifyTbxId',this.tbxId)
            this.tbxId = ''
        },
        dailyRewardItemBoxRightImg(i) {
            if (this.hoverItemBoxRight[i] || this.selectedItem.level == i || this.battlepassData.claimedLevels.includes(i)) {
                return {
                    'background-image': `url(./assets/images/themes/${this.theme}/dailyawarditembox.png)`
                }
            } else {
                return {
                    'background-image': `url(./assets/images/dailyawarditembox.png)`
                }
            }
        },
        GetBattlepassMissionProgress(id) {
            let data = this.battlepassData.missions.find((m) => m.id == id);
            if (data) {
                const num = (data.progress + "").split(".")[1];
                if (num) {
                    return parseFloat(data.progress).toFixed(2);
                } else {
                    return data.progress.toFixed(0);
                }
            } else {
                return 0;
            }
        },
        dailyRewardItemBoxNameRightColor(i) {
            
            if (this.hoverItemBoxRight[i] || this.selectedItem.level == i || this.battlepassData.claimedLevels.includes(i)) {                
                return {
                    'background': this.cssThemes[this.theme].backSvgHoverColor,
                    'color' : this.theme == 'green' ? 'black' : 'white'
                }
            } else {
                return {
                    'background': `#1C1B26`,
                }
            }
        },
        getBattlepassMissionById(id) {
            return this.battlepassMissions.missions.find((mission) => mission.id == id) || {}
        },
        setUpProgressBar() {
            Vue.nextTick(() => {
                for (let i = 0; i < this.battlepassData.missions.length; i++) {
                    if (!this.battlepassMissionProgress[i]) {
                        this.battlepassMissionProgress[i] = new ProgressBar.Path('#battlepassmissionprogress' + i, {
                            duration: 2000,
                        });
                    }
                    let progress = this.GetBattlepassMissionProgress(this.battlepassData.missions[i].id);
                    let val = progress / this.getBattlepassMissionById(this.battlepassData.missions[i].id).repeatAmount;
                    if (val > 1) {
                        val = 1;
                    }
                    this.battlepassMissionProgress[i].set(val)
                    this.battlepassMissionProgress[i].animate(val)
                }
            })
        },
   

    },
    computed: {
        GetBattlepassLevelProgress() {
            let myXP = this.battlepassData.xp;
            let myLevel = this.battlepassData.level;
            let maxXP = this.battlepassItems[myLevel - 1].requiredXP;
            return (100 * myXP) / maxXP;
        },
        getBattlepassItemImage(){
            return `./assets/item_images/${this.selectedItem ? this.selectedItem.image : this.getBattlepassCurrentLevelItem?.image}` 
        },
        ...Vuex.mapState({
            theme: state => state.theme,
            cssThemes: state => state.cssThemes,
            battlepassData: state => state.battlepassData,
            battlePassRemainDay: state => state.battlePassRemainDay,
            battlepassMissions: state => state.battlepassMissions,
            battlepassItems: state => state.battlepassItems,
            locales: state => state.locales,

        }),
        getBattlepassCurrentLevelItem() {
            return this.battlepassItems.find((item) => item.level == this.battlepassData.level) || {}
        },
        getbattlepassBG() {
            return {
                backgroundImage: `url(./assets/images/themes/${this.theme}/battlepass_button.png)`
            }
        }

    },
    mounted() {
        Vue.nextTick(() => {

            const element = document.getElementById('battlepassprogress');
            if (typeof (element) != 'undefined' && element != null) {
                this.battlepassLevelProgress = new ProgressBar.Circle('#battlepassprogress', {
                    duration: 2000,
                    strokeWidth: 6,
                    color: this.cssThemes[this.theme].backSvgHoverColor,
                    trailColor: this.cssThemes[this.theme].battlepassProgressColor,
                    trailWidth: 6,
                });
                this.battlepassLevelProgress.set(this.GetBattlepassLevelProgress / 100)
                this.battlepassLevelProgress.animate(this.GetBattlepassLevelProgress / 100)
            }
        })
        this.setUpProgressBar()
    },
    watch: {
        'battlepassData.missions'() {
            this.setUpProgressBar()
        },
        'battlepassData.xp'() {
            Vue.nextTick(() => {

                if (!this.battlepassLevelProgress) {
                    this.battlepassLevelProgress = new ProgressBar.Circle('#battlepassprogress', {
                        duration: 2000,
                        strokeWidth: 6,
                        color: this.cssThemes[this.theme].backSvgHoverColor,
                        trailColor: this.cssThemes[this.theme].battlepassProgressColor,
                        trailWidth: 6,
                    });
                }
                this.battlepassLevelProgress.animate(this.GetBattlepassLevelProgress / 100)
            })
        },
    },
    template: await importTemplate('./components/battlepass/index.html')
}