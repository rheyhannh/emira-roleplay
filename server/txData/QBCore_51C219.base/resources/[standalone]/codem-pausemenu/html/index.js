import dailyrewards from "./components/dailyrewards/index.js";
import battlepass from "./components/battlepass/index.js";
import guidebook from "./components/guidebook/index.js";
import store from "./components/store/index.js";


const vuexstore = Vuex.createStore({
    state: {
        activePage: 'main',
        locales : {},
        theme: 'orange', // orange, green, pink, red, blue
        dailyAwardDayCounter: 0,
        dailyAwardData: false,
        dailyAwardsUpdatedAt: 0,
        storeItems: [],
        mainStoreItems: [],
        isAdmin: false,
        activeStorePage: 'main',
        activeStoreCategory: false,
        cssThemes: {
            ['orange']: {
                pausemenuHeader: 'color: #F83;text-shadow: 0px 0px 35px rgba(255, 136, 51, 0.45);',
                dailyRewardText: 'color:#F83;',
                resumeText: 'color:#F83',
                backSvgHoverColor: '#F83',
                onlinePlayersContainer: 'background-color:#F83;',
                onlinePlayersText: 'color:#753100;',
                ppBorder: 'border: 1.5px solid #F83;',
                battlepassProgressColor: 'rgba(255, 136, 51, 0.24)',
                battlepassLevelText: 'color: rgba(255, 136, 51, 0.49);',
                keyboardShadow: 'box-shadow: 0px -1px 0.9px 0px rgba(255, 136, 51, 0.41), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                keyboardBorder: 'border: 1.153px solid rgba(255, 136, 51, 0.50);',
                guidebookItemContainerActive: 'background:#FF8834;',
                discordText: 'color:#F83;',
                buyNowButton: 'background: #F83;box-shadow: 0px 0px 44.7px 0px #F83;',
                notifyBG: 'background: linear-gradient(90deg, #F83 0%, #DF935E 100%);',
            },

            ['pink']: {
                pausemenuHeader: 'color: #FF43DD;text-shadow: 0px 0px 35px rgba(255, 51, 218, 0.45);',
                dailyRewardText: 'color:#FF43DD;',
                backSvgHoverColor: '#FF43DD',
                resumeText: 'color:#FF43DD',
                onlinePlayersContainer: 'background-color:#FF43DD;',
                onlinePlayersText: 'color:#750075;',
                ppBorder: 'border: 1.5px solid #FF43DD;',
                battlepassProgressColor: 'rgba(255, 67, 221, 0.24)',
                battlepassLevelText: 'color: rgba(255, 67, 221, 0.49);',
                keyboardShadow: 'box-shadow: 0px -1px 0.9px 0px rgba(255, 67, 221, 0.41), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);',
                keyboardBorder: 'border: 1.153px solid rgba(255, 67, 221, 0.50);',
                guidebookItemContainerActive: 'background:#FF43DD;',
                discordText: 'color:#FF43DD;',
                buyNowButton: 'background: #FF43DD;box-shadow: 0px 0px 44.7px 0px #FF43DD;',
                notifyBG: 'background: linear-gradient(90deg, #FF43DD 0%, #DF5EC7 100%);',

            },
            ['red']: {
                pausemenuHeader: 'color: #FF4343;text-shadow: 0px 0px 35px rgba(255, 51, 51, 0.45);',
                dailyRewardText: 'color:#F33;',
                backSvgHoverColor: '#FF4343',
                resumeText: 'color:#FF4343',
                onlinePlayersContainer: 'background-color:#FF4343;',
                onlinePlayersText: 'color:#750000;',
                ppBorder: 'border: 1.5px solid #FF4343;',
                battlepassProgressColor: 'rgba(255, 67, 67, 0.24)',
                battlepassLevelText: 'color:rgba(255, 67, 67, 0.49);',
                keyboardShadow: 'box-shadow: 0px -1px 0.9px 0px rgba(255, 67, 67, 0.41), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);',
                keyboardBorder: 'border: 1.153px solid rgba(255, 67, 67, 0.50);',
                guidebookItemContainerActive: 'background:#FF4343;color: #750000;',
                discordText: 'color:#FF4343;',
                buyNowButton: 'background: #FF4343;box-shadow: 0px 0px 44.7px 0px #FF4343;',
                notifyBG: 'background: linear-gradient(90deg, #FF4343 0%, #DF5E5E 100%);',

            },
            ['green']: {
                pausemenuHeader: 'color: #43FF88;text-shadow: 0px 0px 35px rgba(51, 255, 126, 0.45);',
                dailyRewardText: 'color:#43FF88;',
                backSvgHoverColor: '#43FF88',
                resumeText: 'color:#43FF88',
                onlinePlayersContainer: 'background-color:#43FF88;',
                onlinePlayersText: 'color:#00752B;',
                ppBorder: 'border: 1.5px solid #43FF88;',
                battlepassProgressColor: 'rgba(67, 255, 136, 0.24)',
                battlepassLevelText: 'color: rgba(67, 255, 136, 0.49);',
                keyboardShadow: 'box-shadow: 0px -1px 0.9px 0px rgba(67, 255, 136, 0.41), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);',
                keyboardBorder: 'border: 1.153px solid rgba(67, 255, 136, 0.50);',
                guidebookItemContainerActive: 'background:#43FF88;color:#00752B;',
                discordText: 'color:#43FF88;',
                buyNowButton: 'background: #43FF88;box-shadow: 0px 0px 44.7px 0px #43FF88;color:black;',
                notifyBG: 'background: linear-gradient(90deg, #43FF88 0%, #5EDF8D 100%);',
            },
            ['blue']: {
                pausemenuHeader: 'color: #43CDFF;text-shadow: 0px 0px 35px rgba(51, 201, 255, 0.45);',
                dailyRewardText: 'color:#43CDFF;',
                backSvgHoverColor: '#43CDFF',
                resumeText: 'color:#43CDFF',
                onlinePlayersContainer: 'background-color:#43CDFF;',
                onlinePlayersText: 'color:#005675;',
                ppBorder: 'border: 1.5px solid #43CDFF;',
                battlepassProgressColor: 'rgba(67, 205, 255, 0.24)',
                battlepassLevelText: 'color:rgba(67, 205, 255, 0.49)',
                keyboardShadow: 'box-shadow: 0px -1px 0.9px 0px rgba(67, 205, 255, 0.41), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);',
                keyboardBorder: 'border: 1.153px solid rgba(67, 205, 255, 0.50);',
                guidebookItemContainerActive: 'background:#43CDFF;color: #005675;',
                discordText: 'color:#43CDFF;',
                buyNowButton: 'background: #43CDFF;box-shadow: 0px 0px 44.7px 0px #43CDFF;',
                notifyBG: 'background: linear-gradient(90deg, #43CDFF 0%, #5EBCDF 100%);',

            },

        },
        guides: [],
        commands: [],
        dailyAwardItems: [],
        notifications: [],
        battlepassData: {},
        battlePassRemainDay: 0,
        battlepassMissions: {},
        battlepassItems: {},
        playersAmount: 0,
        jobData: {},
        moneyData: {},
        playerName: '',
        id: 0,
        ping: 0,
        codemMultichar: false,
        peds: [],
    },
    getters: {},
    mutations: {
        setLocales(state, payload){
            state.locales = payload
        },
        setMainStoreItems(state, payload) {
            state.mainStoreItems = payload
        },
        setStoreItems(state, payload) {
            state.storeItems = payload
        },
        setActiveStorePage(state, payload) {
            state.activeStorePage = payload
        },
        setActiveStoreCategory(state, payload) {
            state.activeStoreCategory = payload
        },
        setPeds(state, payload) {
            state.peds = payload
        },
        setCodemMultichar(state, payload) {
            state.codemMultichar = payload
        },
        setPing(state, payload) {
            state.ping = payload
        },
        setPlayerName(state, payload) {
            state.playerName = payload
        },
        setJobData(state, payload) {
            state.jobData = payload
        },
        setMoneyData(state, payload) {
            state.moneyData = payload
        },
        setPlayersAmount(state, payload) {
            state.playersAmount = payload
        },
        setBattlepassItems(state, payload) {
            state.battlepassItems = payload
        },
        setBattlepassMissions(state, payload) {
            state.battlepassMissions = payload
        },
        setBattlepassRemainDay(state, payload) {
            state.battlePassRemainDay = payload
        },
        setBattlepassData(state, payload) {
            state.battlepassData = payload
        },
        setDailyAwardItems(state, payload) {
            state.dailyAwardItems = payload
        },
        createNotification(state, payload) {
            let data = {
                id: state.notifications.length + 1,
                text: payload.text,
                type: payload.type,
                header: payload.type == 'success' ? 'Succesfull' : 'Error',
            }
            state.notifications.push(data)
            setTimeout(() => {
                state.notifications = state.notifications.filter((item) => item.id != data.id)
            }, 3000)
        },
        setCommands(state, payload) {
            state.commands = payload
        },
        setActivePage(state, payload) {
            state.activePage = payload
        },
        setTheme(state, payload) {
            state.theme = payload
        },
        setGuides(state, payload) {
            state.guides = payload
        },
        setDailyAwardDayCounter(state, payload) {
            state.dailyAwardDayCounter = payload
        },
        setDailyAwardData(state, payload) {
            state.dailyAwardData = payload
        },
        setDailyAwardsUpdatedAt(state, payload) {
            state.dailyAwardsUpdatedAt = payload
        },
        setId(state, payload) {
            state.id = payload
        },
        setIsAdmin(state, payload) {
            state.isAdmin = payload
        }
    },
})

const app = Vue.createApp({
    data: () => ({
        hoverResume: false,
        show: false,
        battlepassMissionProgress: {},
        interval: false,
        formattedDate: false,
        exitModal : false,
        navMenu : {
            guidebook : false, 
            battlepass : false, 
            quit_game : false,
            store : false,
            daily_awards : false,
        }
    }),
    components: {
        dailyrewards,
        battlepass,
        guidebook,
        store,
    },
    methods: {
        hotDeal() {
            this.setActivePage('store')
            this.setActiveStorePage('hotdeals')
            this.storeItems.forEach((item) => {
                if (item.name == 'hotdeals') {
                    if (item.categories[0]) {
                        this.setActiveStoreCategory(item.categories[0].name)
                    }
                }
            })
        },
        setExitModal(payload){
            this.exitModal = payload
        },
        ...Vuex.mapMutations({
            setActivePage: 'setActivePage',
            setGuides: 'setGuides',
            setTheme: 'setTheme',
            setCommands: 'setCommands',
            setDailyAwardItems: 'setDailyAwardItems',
            setDailyAwardDayCounter: 'setDailyAwardDayCounter',
            setDailyAwardData: 'setDailyAwardData',
            setDailyAwardsUpdatedAt: 'setDailyAwardsUpdatedAt',
            createNotification: 'createNotification',
            setBattlepassData: 'setBattlepassData',
            setBattlepassRemainDay: 'setBattlepassRemainDay',
            setBattlepassMissions: 'setBattlepassMissions',
            setBattlepassItems: 'setBattlepassItems',
            setPlayersAmount: 'setPlayersAmount',
            setJobData: 'setJobData',
            setMoneyData: 'setMoneyData',
            setPlayerName: 'setPlayerName',
            setId: 'setId',
            setPing: 'setPing',
            setCodemMultichar: 'setCodemMultichar',
            setPeds: 'setPeds',
            setStoreItems: 'setStoreItems',
            setMainStoreItems: 'setMainStoreItems',
            setIsAdmin: 'setIsAdmin',
            setActiveStorePage: 'setActiveStorePage',
            setActiveStoreCategory: 'setActiveStoreCategory',
            setLocales : 'setLocales',

        }),
        keyHandler(e) {
            if (e.which == 27 && this.show) {
                postNUI('close')
            }
        },
        navActions(payload) {
            postNUI('navActions', payload)
        },
        messageHandler(event) {
            switch (event.data.action) {
                case "checkNui":
                    postNUI('loaded')
                    break
                case "syncGuides":
                    this.setGuides(event.data.payload)
                    break
                case "setTheme":
                    this.setTheme(event.data.payload)
                    break
                case "SetStoreItems":
                    this.setStoreItems(event.data.payload)
                    break
                case "CloseMenu":
                    this.show = false
                    break
                case "OpenMenu":
                    this.show = true
                    break
                case "SetMainStoreItems":
                    this.setMainStoreItems(event.data.payload)
                    break
                case "setCommands":
                    this.setCommands(event.data.payload)
                    break
                case "setDailyAwardItems":
                    this.setDailyAwardItems(event.data.payload)
                    break
                case "setDailyAwardDayCounter":
                    this.setDailyAwardDayCounter(event.data.payload)
                    break
                case "setDailyAwardData":
                    this.setDailyAwardData(event.data.payload)
                    break
                case "setDailyAwardsUpdatedAt":
                    this.setDailyAwardsUpdatedAt(event.data.payload)
                    break
                case "createNotification":
                    this.createNotification(event.data.payload)
                    break
                case "SetBattlepassData":
                    this.setBattlepassData(event.data.payload)
                    break
                case "SetBattlepassRemainDay":
                    this.setBattlepassRemainDay(event.data.payload)
                    break
                case "SetBattlepassMissions":
                    this.setBattlepassMissions(event.data.payload)
                    break
                case "setBattlepassItems":
                    this.setBattlepassItems(event.data.payload)
                    break
                case "PlayersAmount":
                    this.setPlayersAmount(event.data.payload)
                    break
                case "UPDATE_JOB":
                    this.setJobData(event.data.payload)
                    break
                case "UPDATE_MONEY":
                    this.setMoneyData(event.data.payload)
                    break
                case "SetPlayerName":
                    this.setPlayerName(event.data.payload)
                    break
                case "SetID":
                    this.setId(event.data.payload)
                    break
                case "setPing":
                    this.setPing(event.data.payload)
                    break
                case "UseCodemMultichar":
                    this.setCodemMultichar(event.data.payload)
                    break
                case "setPeds":
                    this.setPeds(event.data.payload)
                    break
                case "setIsAdmin":
                    this.setIsAdmin(event.data.payload)
                    break
                case "setLocales":
                    this.setLocales(event.data.payload)
                    break
                case "setNavMenu":
                    this.navMenu = event.data.payload
                    break
                default:
                    break
            }
        },
        getBattlepassMissionById(id) {
            if (this.battlepassMissions && this.battlepassMissions.missions) {
                return this.battlepassMissions.missions.find((mission) => mission.id == id) || {}
            }
            return {}
        },
        GetBattlepassMissionProgress(id) {
            if (this.battlepassData && this.battlepassData.missions) {
                let data = this.battlepassData.missions.find((m) => m.id == id);
                if (data) {
                    const num = (data.progress + "").split(".")[1];
                    if (num) {
                        return parseFloat(data.progress).toFixed(2);
                    } else {
                        return data.progress.toFixed(0);
                    }
                }
            }
            return 0.0;
        },
        numberWithSpaces(x) {
            if (!isNaN(x)) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
            return 0
        },
        OpenMultichar() {
            postNUI('openMultichar')
        },
        getDate() {
            let date = new Date().toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
            });
            return date;
        },
    },
    beforeDestroy() {
        this.setActivePage('main')

    },
    computed: {
        getHotDealData() {
            let itemData = false
            this.storeItems.forEach((item) => {
                if (item.name == 'hotdeals') {
                    itemData = item.items[0]
                }
            })
            return itemData
        },
        fullImage() {
            if (this.getHotDealData.itemtype == 'house') {
                return {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '0.44288rem',
                }
            }
            return {}
        },
        getRemainBattlepassMissionTime() {
            const date1 = new Date(this.battlepassMissions.updatedAt * 1000);
            const date2 = new Date();
            var diff = (date1.valueOf() + 86400000) - date2.valueOf();
            var diffInHours = diff / 1000 / 60 / 60; // Convert milliseconds to hours
            return diffInHours?.toFixed(0);
        },
        getRemainTime() {
            const date1 = new Date(this.dailyAwardsUpdatedAt * 1000);
            const date2 = new Date();
            var diff = (date1.valueOf() + 86400000) - date2.valueOf();
            var diffInHours = diff / 1000 / 60 / 60; // Convert milliseconds to hours
            return diffInHours?.toFixed(0);
        },
        getMenuItemColor() {
            return `menu-item${this.theme}`
        },
        getCurrentDayItem() {
            return this.dailyAwardItems[this.dailyAwardDayCounter - 1]
        },
        characterInformationsBG() {
            return {
                backgroundImage: `url(./assets/images/themes/${this.theme}/characterinformations.png)`
            }
        },
        ...Vuex.mapState({
            activePage: state => state.activePage,
            theme: state => state.theme,
            cssThemes: state => state.cssThemes,
            dailyAwardItems: state => state.dailyAwardItems,
            dailyAwardDayCounter: state => state.dailyAwardDayCounter,
            dailyAwardsUpdatedAt: state => state.dailyAwardsUpdatedAt,
            notifications: state => state.notifications,
            battlepassMissions: state => state.battlepassMissions,
            battlepassData: state => state.battlepassData,
            playersAmount: state => state.playersAmount,
            jobData: state => state.jobData,
            moneyData: state => state.moneyData,
            playerName: state => state.playerName,
            id: state => state.id,
            ping: state => state.ping,
            codemMultichar: state => state.codemMultichar,
            storeItems: state => state.storeItems,
            mainStoreItems: state => state.mainStoreItems,
            locales : state => state.locales,
        }),
        getPausemenuHeader() {
            if (this.activePage == 'main') {
                return this.formattedDate
            }
            if (this.activePage == 'guidebook') {
                return this.locales.guidebook
            }
            if (this.activePage == 'battlepass') {
                return this.locales.battlepass
            }
            if (this.activePage == 'dailyrewards') {
                return  this.locales.dailyrewards
            }
            if (this.activePage == 'store') {
                return this.locales.store
            }
        }
    },
    watch: {
        'battlepassData.missions'() {
            Vue.nextTick(() => {
                for (let i = 0; i < this.battlepassData.missions.length; i++) {
                    if (!this.battlepassMissionProgress[i]) {
                        this.battlepassMissionProgress[i] = new ProgressBar.Path('#battlepassmissionprogressbar' + i, {
                            duration: 2000,
                        });
                    }
                    let progress = this.GetBattlepassMissionProgress(this.battlepassData.missions[i].id);

                    let val = progress / this.getBattlepassMissionById(this.battlepassData.missions[i].id).repeatAmount;
                    if (val > 1) {
                        val = 1;
                    }
                    this.battlepassMissionProgress[i].set(0)
                    this.battlepassMissionProgress[i].animate(val)
                }
            })
        },
        'storeItems'() {
            this.storeItems.forEach(data => {
                data.items.forEach((item) => {
                    if (item.itemtype == 'weapon') {
                        item.image = item.image || 'https://www.vespura.com/fivem/weapons/images/' + item.name.toUpperCase() + '.png'
                    }
                    if (item.itemtype == 'ped') {
                        item.image = item.image || 'https://docs.fivem.net/peds/' + item.name + '.webp'
                    }
                    if (item.itemtype == 'vehicle') {
                        item.image = item.image || 'https://docs.fivem.net/vehicles/' + item.name + '.webp'
                    }
                })
            });
        },
        'mainStoreItems'() {
            this.mainStoreItems.forEach(item => {
                if (item.itemtype == 'ped') {
                    item.image = item.image || 'https://docs.fivem.net/peds/' + item.name + '.webp'
                }
                if (item.itemtype == 'vehicle') {
                    item.image = item.image || 'https://docs.fivem.net/vehicles/' + item.name + '.webp'
                }
                if (item.itemtype == 'weapon') {
                    item.image = item.image || 'https://www.vespura.com/fivem/weapons/images/' + item.name.toUpperCase() + '.png'
                }
            })
        },
    },
    mounted() {
        // this.setUpProgressBar()
        window.addEventListener('message', this.messageHandler);
        window.addEventListener('keydown', this.keyHandler);
        this.formattedDate = this.getDate();
        this.interval = setInterval(() => {
            this.formattedDate = this.getDate();
        }, 30000);
        document.querySelector("#app").style.display = "block";

    }
})
app.use(vuexstore)

app.mount("#app");
let resourceName = 'codem-pausemenu'
if (window.GetParentResourceName) {
    resourceName = window.GetParentResourceName();
}
window.postNUI = async (name, data) => {
    try {
        const response = await fetch(`https://${resourceName}/${name}`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        });
        return !response.ok ? null : response.json();
    } catch (error) {
        // console.log(error)
    }
}