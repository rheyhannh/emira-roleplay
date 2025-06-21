import importTemplate from '../../utils/importTemplate.js'
import inlinesvg from '../../utils/inlinesvg.js'

export default {
    data() {
        return {
            hoverResume: false,
            buyModal : false,
            selectedItemData : false,
            entityModel : '',
            filterText : '',
            mainFilterText : '',
            selectedStoreItem : 1,
        }
    },
    components: {
        inlinesvg
    },
    methods: {
        ...Vuex.mapMutations({
            setActivePage: 'setActivePage',
            setActiveStorePage : 'setActiveStorePage',
            setActiveStoreCategory : 'setActiveStoreCategory',
        }),
        numberWithSpaces(x) {
            if(!isNaN(x)){
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
            return 0
        },
        toggleBuyModal(show, item){
            this.buyModal = show
            this.selectedItemData = item
        },
        confirmBuy(){
            postNUI('buyVipItem', this.selectedItemData)
            this.toggleBuyModal(false, false)
        },
        setActiveStorePageData(payload) {
            this.setActiveStorePage(payload)
            if(this.getStoreData && this.getStoreData.categories && this.getStoreData.categories[0]){
                this.setActiveStoreCategory(this.getStoreData.categories[0].name)
            }else{
                this.setActiveStoreCategory(false)
            }
            this.filterText = ''
            this.mainFilterText = '' 
        },
     
        async changePed(item){
            this.entityModel = await postNUI('changePed', item)
        },
        getStoreBG(image){
            return {
                backgroundImage : `url(./assets/images/${image})`
            }
        },
        fullImage(itemType){
            if(itemType == 'house'){
                return {
                    width:'100%',
                    height : '100%',
                    objectFit : 'cover',
                    borderRadius : '0.44288rem',
                }
            }  
            return {}
        },
    },
    computed: {
        getStoreData(){
            return this.storeItems.find((item) => item.name == this.activeStorePage)
        },
        filterMainItems(){
            const data = []
            this.storeItems.forEach(element => {
                element.items.forEach((item) =>{
                    data.push(item)
                })
            });
            if(this.mainFilterText.length > 0){
                return data.filter((item) => {
                    return item.name?.toLowerCase().includes(this.mainFilterText.toLowerCase()) || item.label?.toLowerCase().includes(this.mainFilterText.toLowerCase())
                })
            }
            return false
        },
        getStoreDataItems(){
            if(this.activeStoreCategory == 'mypeds'){
                return this.peds
            }
            if(this.filterText.length > 0){
                return this.getStoreData.items.filter((item) => item.category == (this.activeStoreCategory || this.activeStoreCategory == 'all') || (item.label?.toLowerCase().includes(this.filterText) || item.header?.toLowerCase().includes(this.filterText) || item.name?.toLowerCase().includes(this.filterText)))
            }
            return this.getStoreData.items.filter((item) => item.category == this.activeStoreCategory || this.activeStoreCategory == 'all')
        },
       
        ...Vuex.mapState({
            theme: state => state.theme,
            cssThemes: state => state.cssThemes,
            moneyData : state => state.moneyData,
            peds : state => state.peds,
            storeItems : state => state.storeItems,
            mainStoreItems : state => state.mainStoreItems,
            activeStorePage : state => state.activeStorePage,
            activeStoreCategory : state => state.activeStoreCategory,
            locales: state => state.locales,

        }),
        getActiveStyle() {
            return this.cssThemes[this.theme].onlinePlayersContainer + `box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25); ${this.theme == 'green' && 'color:black;'}`
        }
    },
    async mounted() {
        this.entityModel = await postNUI('getEntityModel')
    },
    unmounted() {
        this.setActiveStorePage('main')
        this.setActiveStoreCategory(false)
    },
    template: await importTemplate('./components/store/index.html')
}