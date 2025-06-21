import importTemplate from '../../utils/importTemplate.js'
import inlinesvg from '../../utils/inlinesvg.js'

export default {
    data() {
        return {
            uploadPhotoModal: false,
            hoverResume: false,
            hoverGuidebookItem: {},
            guideName: '',
            activeCategory: 'keybinds',
            editMode: false,
            imgUrl: '',

            createNewGuide: false,
            editorPlaceholder: false,
            boldMode: false,
            italicMode: false,
            selectedCommand: null,
            filterCommandText: '',
            selectedKey: null,
            selectedGuideBookId: false,
            keybinds: {

            },
            discordLink: '',
            interval: false,
            focusedGuidebook: false,
            createKeyInfo: {
                selectedKey: null,
                selectedKeyCombination: null,
                selectedKeyDesc: '',
                selectedKeyCombinationDesc: '',
            },
            createCommandModal: false,
            commandInfo: {
                command: '',
                desc: '',
            },
            editGuideBook: false,
            editedGuidebookCopy: false,
            deleteGuideBookModal : false,
            selectedGuideBookID : null,
        }
    },
    components: {
        inlinesvg
    },
    methods: {
        ...Vuex.mapMutations({
            setActivePage: 'setActivePage',
            createNotification: 'createNotification',
        }),
        setDeleteGuideBookModal(payload, id){
            this.deleteGuideBookModal = payload
            this.selectedGuideBookID = id
        },
        deleteKeybind() {
            if (this.keybinds[this.createKeyInfo.selectedKey]) {
                postNUI('deleteKeybind', this.createKeyInfo.selectedKey)
                this.createKeyInfo = {
                    selectedKey: null,
                    selectedKeyCombination: null,
                    selectedKeyDesc: '',
                    selectedKeyCombinationDesc: '',
                }
            }
        },
        setEditGuidebook(payload) {
            this.editGuideBook = payload
            if (payload) {
                this.$nextTick(() => {
                    this.editedGuidebookCopy = { ...this.getGuideBookById(this.selectedGuideBookId) }
                    textField.document.designMode = "On"
                    const frame = document.querySelector('#editor').contentWindow;
                    const link = document.createElement('link');
                    link.setAttribute('rel', 'stylesheet');
                    link.setAttribute('type', 'text/css');
                    link.setAttribute('href', './fonts.css');
                    frame.document.head.appendChild(link);
                    frame.document.querySelector('body').style.color = 'white'
                    frame.document.querySelector('body').style.wordBreak = 'break-all'
                    frame.document.querySelector('body').style.fontFamily = 'Gilroy-Medium'
                    frame.document.querySelector('body').style.touchAction = 'auto'
                    frame.document.querySelector('html').style.touchAction = 'auto'
                    this.interval = setInterval(() => {
                        if (!this.uploadPhotoModal && !this.focusedGuidebook) {
                            frame.document.querySelector('body').focus();
                        }
                    })
                    frame.document.querySelector('body').innerHTML = this.editedGuidebookCopy.html
                })
            } else {
                this.editedGuidebookCopy = false

            }
        },
        messageHandler(event) {
            switch (event.data.action) {
                case "setKeybinds":
                    this.keybinds = event.data.payload
                    break
                default:
                    break
            }
        },
        deleteCommand(command) {
            postNUI('deleteCommand', command)
        },
        selectCommand(index) {
            if (index == this.selectedCommand) {
                this.selectedCommand = null
                return
            }
            this.selectedCommand = index
        },
        createCommand() {
            let valid = true
            let info = ''
            if (this.commandInfo.command.length == 0) {
                info = this.locales.type_command_name
                valid = false
            } else if (this.commandInfo.desc.length == 0) {
                info = this.locales.type_command_desc
                valid = false
            }
            if (!valid) {
                this.createNotification({
                    type: 'error',
                    text: info,
                })
                return
            }
            postNUI('createCommand', this.commandInfo)
            this.setCreateCommandModal(false)
        },
        setCreateCommandModal(payload) {
            this.createCommandModal = payload
            if (!payload) {
                this.commandInfo = {
                    command: '',
                    desc: '',
                }
            }
        },
        createKeybind() {
            let valid = true
            let info = ''
            if (!this.createKeyInfo.selectedKey) {
                valid = false
                info = this.locales.select_key_to_create
            } else if (this.createKeyInfo.selectedKey && this.createKeyInfo.selectedKeyDesc.length == 0) {
                valid = false
                info = this.locales.type_a_desc
            } else if (this.createKeyInfo.selectedKeyCombination && this.createKeyInfo.selectedKeyCombinationDesc.length == 0) {
                valid = false
                info = this.locales.type_a_desc_for_combination
            }
            if (!valid) {
                this.createNotification({
                    type: 'error',
                    text: info,
                })
                return
            }
            postNUI('createKeybind', {
                key: this.createKeyInfo.selectedKey,
                desc: this.createKeyInfo.selectedKeyDesc,
                combinationkey: this.createKeyInfo.selectedKeyCombination,
                combinationdesc: this.createKeyInfo.selectedKeyCombinationDesc,
            })
            this.createKeyInfo = {
                selectedKey: null,
                selectedKeyCombination: null,
                selectedKeyDesc: '',
                selectedKeyCombinationDesc: '',
            }
        },
        createGuide() {
            const frame = document.querySelector('#editor').contentWindow;
            const body = frame.document.querySelector('body')
            var text = body.innerHTML;
            postNUI('createGuide', { html: text, name: this.guideName })
            this.guideName = ''
            this.createNewGuide = false
        },
        deleteGuide(id) {
            postNUI('deleteGuide', id)
            this.setEditGuidebook(false)
            this.setDeleteGuideBookModal(false, null)
        },
        getYoutubeVideoId(url) {
            var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
            var match = url.match(regExp);
            if (match && match[2].length == 11) {
                return match[2];
            } else {
                return 'error';
            }
        },
        uploadImage() {
            if (this.imgUrl.includes('youtube')) {
                const frame = document.querySelector('#editor').contentWindow;
                const videoId = this.getYoutubeVideoId(this.imgUrl);
                frame.document.querySelector('body').focus()

                textField.document.execCommand('insertHTML', false, `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}?mute=1" allowfullscreen frameborder="0" ></iframe>`)
                this.imgUrl = ''
                this.uploadPhotoModal = false
                return
            }
            if (!this.imageExists(this.imgUrl)) {
                console.log('Image is not exist')
                return
            }
            const frame = document.querySelector('#editor').contentWindow;
            frame.document.querySelector('body').focus()
            textField.document.execCommand('insertImage', false, this.imgUrl)
            textField.document.querySelector('img').style.display = 'block'
            // textField.document.querySelector('img').style.width = '44.0625rem'
            // textField.document.querySelector('img').style.height = '18.75rem'
            textField.document.querySelector('img').style.objectFit = 'cover'



            this.imgUrl = ''
            this.uploadPhotoModal = false
        },
        setSelectedKey(key) {
            if (this.editMode) {
                if (!this.createKeyInfo.selectedKey) {
                    this.createKeyInfo.selectedKey = key
                    this.createKeyInfo.selectedKeyCombination = false
                    this.createKeyInfo.selectedKeyCombinationDesc = ''
                } else if (this.createKeyInfo.selectedKey == key) {
                    this.createKeyInfo.selectedKey = false
                    this.createKeyInfo.selectedKeyDesc = ''
                    this.createKeyInfo.selectedKeyCombination = false
                    this.createKeyInfo.selectedKeyCombinationDesc = ''
                } else if (this.createKeyInfo.selectedKey && this.createKeyInfo.selectedKeyCombination != key) {
                    this.createKeyInfo.selectedKeyCombination = key
                } else if (this.createKeyInfo.selectedKeyCombination == key) {
                    this.createKeyInfo.selectedKeyCombination = false
                    this.createKeyInfo.selectedKeyCombinationDesc = ''
                }

            } else {
                if (this.keybinds[key]) {
                    if (this.selectedKey == key) {
                        this.selectedKey = false
                    } else {
                        this.selectedKey = key
                    }
                }
            }
        },
        imageExists(image_url) {

            var http = new XMLHttpRequest();

            http.open('HEAD', image_url, false);
            http.send();

            return http.status != 404;

        },
        setUploadPhotoModal(payload) {
            this.uploadPhotoModal = payload
        },
        setEditMode() {
            this.editMode = !this.editMode
            if (!this.editMode) {
                this.createNewGuide = false
            } else {
                this.createKeyInfo = {
                    selectedKey: null,
                    selectedKeyCombination: null,
                    selectedKeyDesc: '',
                    selectedKeyCombinationDesc: '',
                }
                this.selectedKey = null
            }
            this.setEditGuidebook(false)

        },
        setActiveCategory(payload, id) {
            this.activeCategory = payload
            if (payload == 'guidebook') {
                this.selectedGuideBookId = id
            }
            this.setEditGuidebook(false)

        },
        getGuideBookById(id) {
            return this.guides.find((item) => item.id == id)
        },
        openLink(link) {
            window.invokeNative("openUrl", link);
        },

        setItalicMode() {
            this.italicMode = !this.italicMode
            textField.document.execCommand('italic', false, null)

        },
        bold() {
            this.boldMode = !this.boldMode
            textField.document.execCommand('bold', false, null)
        },
        saveGuide() {
            const frame = document.querySelector('#editor').contentWindow;
            const body = frame.document.querySelector('body')
            var text = body.innerHTML;
            postNUI('saveGuide', { html: text, name: this.editedGuidebookCopy.name, id: this.selectedGuideBookId })
            this.setEditGuidebook(false)
        },
        setNewCreateGuide() {
            if (this.editGuideBook) {
                this.setEditGuidebook(false)
            }
            this.createNewGuide = !this.createNewGuide
            if (this.createNewGuide) {
                this.$nextTick(() => {

                    textField.document.designMode = "On"
                    const frame = document.querySelector('#editor').contentWindow;
                    const link = document.createElement('link');
                    link.setAttribute('rel', 'stylesheet');
                    link.setAttribute('type', 'text/css');
                    link.setAttribute('href', './fonts.css');
                    frame.document.head.appendChild(link);
                    frame.document.querySelector('body').style.color = 'white'
                    frame.document.querySelector('body').style.wordBreak = 'break-all'
                    frame.document.querySelector('body').style.fontFamily = 'Gilroy-Medium'
                    frame.document.querySelector('body').style.touchAction = 'auto'
                    frame.document.querySelector('html').style.touchAction = 'auto'
                    this.interval = setInterval(() => {
                        if (!this.uploadPhotoModal && !this.focusedGuidebook) {
                            frame.document.querySelector('body').focus();
                        }
                    })

                    // textField.document.execCommand('insertImage', false, './assets/images/car.png')
                    // textField.document.querySelector('img').style.display = 'block'
                })
            }
        },
        getKeyboardKeyBG(key) {
            // if(this.selectedKey){
            //     if(this.keybinds[this.selectedKey].combinationKey){
            //         return this.cssThemes[this.theme].keyboardBorder + (this.selectedKey == key || this.keybinds[this.selectedKey].combinationKey == key ? 
            //             this.cssThemes[this.theme].onlinePlayersContainer : '')
            //     }else{
            //         return this.cssThemes[this.theme].keyboardBorder + (this.selectedKey == key ?
            //             this.cssThemes[this.theme].onlinePlayersContainer : '') 
            //     }

            // }
            if (this.editMode && this.createKeyInfo.selectedKey == key) {
                return this.cssThemes[this.theme].keyboardBorder + this.cssThemes[this.theme].onlinePlayersContainer
            } else if (this.editMode && this.createKeyInfo.selectedKey) {
                return this.cssThemes[this.theme].keyboardBorder
            }
            return this.cssThemes[this.theme].keyboardBorder + (this.keybinds[key] ?
                this.cssThemes[this.theme].onlinePlayersContainer : '')
        },
        getKeyboardActiveKeyBG() {
            // if(this.selectedKey){
            //     if(this.keybinds[this.selectedKey].combinationKey){
            //         return this.cssThemes[this.theme].keyboardBorder + (this.selectedKey == key || this.keybinds[this.selectedKey].combinationKey == key ? 
            //             this.cssThemes[this.theme].onlinePlayersContainer : '')
            //     }else{
            //         return this.cssThemes[this.theme].keyboardBorder + (this.selectedKey == key ?
            //             this.cssThemes[this.theme].onlinePlayersContainer : '') 
            //     }

            // }
            return this.cssThemes[this.theme].keyboardBorder + (this.cssThemes[this.theme].onlinePlayersContainer)
        },
        handleFocusout() {
            this.focusedGuidebook = false
        },
        handleBlur() {

            this.focusedGuidebook = true
            setTimeout(() => {
                this.$refs.guideNameInput.focus()
            }, 100)
        },
    },
    watch: {
        createNewGuide(val) {
            if (!val && this.interval) {
                clearInterval(this.interval)
                this.interval = false
            }
        },
        guides(val) {
            if (this.selectedGuideBookId) {
                let find = val.find((item) => item.id == this.selectedGuideBookId)
                if (!find) {
                    this.selectedGuideBookId = false
                    this.activeCategory = 'keybinds'
                }
            }
        }
    },
    computed: {

        ...Vuex.mapState({
            theme: state => state.theme,
            cssThemes: state => state.cssThemes,
            guides: state => state.guides,
            commands: state => state.commands,
            isAdmin: state => state.isAdmin,
            locales: state => state.locales,
        }),

        getEnterBG() {
            // if(this.selectedKey){
            //     if(this.keybinds[this.selectedKey].combinationKey){
            //         if(this.keybinds[this.selectedKey].combinationKey == 'ENTER'){
            //             return {
            //                 backgroundImage: `url(./assets/images/themes/${this.theme}/enter_active.png)`,
            //             } 
            //         }
            //     }else{
            //         if(this.selectedKey == 'ENTER'){
            //             return {
            //                 backgroundImage: `url(./assets/images/themes/${this.theme}/enter_active.png)`,
            //             }
            //         }
            //     }
            // }
            if (this.keybinds["ENTER"]) {
                return {
                    backgroundImage: `url(./assets/images/themes/${this.theme}/enter_active.png)`,
                }
            }
            return {
                backgroundImage: `url(./assets/images/themes/${this.theme}/enter.png)`,
            }
        },
        getActiveEnterBG() {
            return {
                backgroundImage: `url(./assets/images/themes/${this.theme}/enter_active.png)`,
            }
        },
        getDiscordBG() {
            return {
                backgroundImage: `url(./assets/images/themes/${this.theme}/Discord.png)`
            }
        },
        getFilteredCommands() {
            this.selectedCommand = null
            if (this.filterCommandText.length > 0) {
                return this.commands.filter((command) => command.name.toLowerCase().includes(this.filterCommandText.toLowerCase()))

            }
            return this.commands
        }

    },
    async mounted() {
        const keys = await postNUI('getKeybinds')
        this.keybinds = keys
        const link = await postNUI('getDiscordLink')
        this.discordLink = link
        window.addEventListener('message', this.messageHandler);

    },
    beforeDestroy() {
        if (this.interval) {
            clearInterval(this.interval)
            this.interval = false
        }

    },
    template: await importTemplate('./components/guidebook/index.html')
}