import importTemplate from '../../utils/importTemplate.js'
import inlinesvg from '../../utils/inlinesvg.js'

export default {
    data() {
        return {
            swiper: false,
            hoverGoBack: false,
            hoverClaim: false,
            hoverItemBoxLeft: {},
            hoverItemBoxRight: {},
            currentDailyItemsPage: 1,
            leftArrowOpacity: {
                ['1']: 0.0,
                ['2']: 0.0,
                ['3']: 0.0,
                ['4']: 0.0,
                ['5']: 0.0,
            },
            leftArrowOpacityDefault: {
                ['1']: 1.0,
                ['2']: 0.7,
                ['3']: 0.6,
                ['4']: 0.5,
                ['5']: 0.4,
            },
            currentLeftArrow: 1,
            rightArrowOpacity: {
                ['1']: 0.0,
                ['2']: 0.0,
                ['3']: 0.0,
                ['4']: 0.0,
                ['5']: 0.0,
            },
            rightArrowOpacityDefault: {
                ['1']: 0.4,
                ['2']: 0.5,
                ['3']: 0.6,
                ['4']: 0.7,
                ['5']: 1.0,
            },
            currentRightArrow: 5,
            leftInterval: false,
            rightInterval: false,

        }
    },
    components: {
        inlinesvg
    },
    methods: {
        ...Vuex.mapMutations({
            setActivePage: 'setActivePage',
        }),
        prevDailyItemPage() {
            this.currentDailyItemsPage -= 1
            if (this.currentDailyItemsPage <= 0) {
                this.currentDailyItemsPage = this.getMaxPage()

            }
        },
        nextDailyItemPage() {
            this.currentDailyItemsPage += 1
            if (this.currentDailyItemsPage > this.getMaxPage()) {
                this.currentDailyItemsPage = 1
            }
        },
        getMaxPage() {
            const totalItems = this.dailyAwardItems.length
            return Math.ceil(totalItems / 8)
        },
        applyMargin(i) {
            if (i == 4 || i == 12 || i == 20 || i == 28 || i == 36 || i == 44 || i == 52 || i == 60) {
                return true
            }
        },
        shouldShowRightItem(index) {
            const items = {
                [1]: [5, 6, 7, 8],
                [2]: [13, 14, 15, 16],
                [3]: [21, 22, 23, 24],
                [4]: [29, 30, 31, 32],
                [5]: [37, 38, 39, 40],
                [6]: [45, 46, 47, 48],
                [7]: [53, 54, 55, 56],
                [8]: [61, 62, 63, 64],
            }
            index = index + 1
            let item = items[this.currentDailyItemsPage]

            return item.includes(index)
        },
        shouldShowLeftItem(index) {
            const items = {
                [1]: [1, 2, 3, 4],
                [2]: [9, 10, 11, 12],
                [3]: [17, 18, 19, 20],
                [4]: [25, 26, 27, 28],
                [5]: [33, 34, 35, 36],
                [6]: [41, 42, 43, 44],
                [7]: [49, 50, 51, 52],
                [8]: [57, 58, 59, 60],
            }

            index = index + 1
            let item = items[this.currentDailyItemsPage]

            return item.includes(index)
        },
        dailyRewardItemBoxNameLeftColor(i) {
            if (this.hoverItemBoxLeft[i] || this.checkActiveItem(i) || this.checkAlreadyClaimedByIndex(i + 1) || this.dailyAwardDayCounter > (i + 1)) {
                return {
                    'background': this.cssThemes[this.theme].backSvgHoverColor,
                }
            } else {
                return {
                    'background': `#1C1B26`
                }
            }
        },
        dailyRewardItemBoxNameRightColor(i) {
            if (this.hoverItemBoxRight[i] || this.checkActiveItem(i) || this.checkAlreadyClaimedByIndex(i + 1) || this.dailyAwardDayCounter > (i + 1)) {
                return {
                    'background': this.cssThemes[this.theme].backSvgHoverColor,
                }
            } else {
                return {
                    'background': `#1C1B26`
                }
            }
        },
        dailyRewardItemBoxLeftImg(i) {
            if (this.hoverItemBoxLeft[i] || this.checkActiveItem(i) || this.checkAlreadyClaimedByIndex(i + 1) || this.dailyAwardDayCounter > (i + 1)) {
                return {
                    'background-image': `url(./assets/images/themes/${this.theme}/dailyawarditembox.png)`
                }
            } else {
                return {
                    'background-image': `url(./assets/images/dailyawarditembox.png)`
                }
            }
        },
        dailyRewardItemBoxRightImg(i) {
            if (this.hoverItemBoxRight[i] || this.checkActiveItem(i) || this.checkAlreadyClaimedByIndex(i + 1) || this.dailyAwardDayCounter > (i + 1)) {
                return {
                    'background-image': `url(./assets/images/themes/${this.theme}/dailyawarditembox.png)`
                }
            } else {
                return {
                    'background-image': `url(./assets/images/dailyawarditembox.png)`
                }
            }
        },
        checkActiveItem(index) {
            index += 1
            if (index == this.dailyAwardDayCounter) {
                return true
            }
            return false
        },
        claimItem() {
            postNUI('claimDailyAwardItem', { item: this.getCurrentDayItem, itemDay: this.dailyAwardDayCounter })
        },
        checkAlreadyClaimedByIndex(index){
            return this.dailyAwardData.claimedDays.includes(index)
        }

    },
    computed: {
        getRemainTime() {
            const date1 = new Date(this.dailyAwardsUpdatedAt * 1000) ;
            const date2 = new Date() ;
            var diff = (date1.valueOf() + 86400000) - date2.valueOf();
            var diffInHours = diff / 1000 / 60 / 60; // Convert milliseconds to hours
            return diffInHours?.toFixed(0);
        },
        checkAlreadyClaimed() {
            return this.dailyAwardData.claimedDays.includes(this.dailyAwardDayCounter)
        },
        dailyRewardsBoxBG() {
            return {
                backgroundImage: `url(./assets/images/themes/${this.theme}/dailyrewardsbox.png)`
            }
        },
        ...Vuex.mapState({
            theme: state => state.theme,
            cssThemes: state => state.cssThemes,
            dailyAwardItems: state => state.dailyAwardItems,
            dailyAwardDayCounter: state => state.dailyAwardDayCounter,
            dailyAwardData: state => state.dailyAwardData,
            dailyAwardsUpdatedAt: state => state.dailyAwardsUpdatedAt,
            locales: state => state.locales,
        }),
        getCurrentDayItem() {
            return this.dailyAwardItems[this.dailyAwardDayCounter - 1]
        },

    },
    mounted() {
        const items = {
            [1]: [1, 2, 3, 4, 5, 6, 7, 8],
            [2]: [9, 10, 11, 12, 13, 14, 15, 16],
            [3]: [17, 18, 19, 20, 21, 22, 23, 24],
            [4]: [25, 26, 27, 28, 29, 30, 31, 32],
            [5]: [33, 34, 35, 36, 37, 38, 39, 40],
            [6]: [41, 42, 43, 44, 45, 46, 47, 48],
            [7]: [49, 50, 51, 52, 53, 54, 55, 56],
            [8]: [57, 58, 59, 60, 61, 62, 63, 64],
            [9]: [65, 66, 67, 68, 69, 70, 71, 72],
            [10]: [73, 74, 75, 76, 77, 78, 79, 80],
            [11]: [81, 82, 83, 84, 85, 86, 87, 88],
        }
        for(let key in items){
            const item = items[key]
            if(item.includes(this.dailyAwardDayCounter)){
                this.currentDailyItemsPage = key
            }
        }
      

        this.leftInterval = setInterval(() => {

            this.leftArrowOpacity[this.currentLeftArrow.toString()] = this.leftArrowOpacityDefault[this.currentLeftArrow.toString()]
            this.currentLeftArrow += 1
            if (this.currentLeftArrow > 6) {
                for (let i = 1; i <= 5; i++) {
                    this.leftArrowOpacity[i.toString()] = 0.0
                }
                this.currentLeftArrow = 1
            }
        }, 600)
        this.rightInterval = setInterval(() => {
            this.rightArrowOpacity[this.currentRightArrow.toString()] = this.rightArrowOpacityDefault[this.currentRightArrow.toString()]
            this.currentRightArrow -= 1
            if (this.currentRightArrow < 0) {
                for (let i = 1; i <= 5; i++) {
                    this.rightArrowOpacity[i.toString()] = 0.0
                }
                this.currentRightArrow = 5
            }
        }, 600)
    },
    beforeDestroy() {
        clearInterval(this.leftInterval)
        clearInterval(this.rightInterval)

    },
    template: await importTemplate('./components/dailyrewards/index.html')
}