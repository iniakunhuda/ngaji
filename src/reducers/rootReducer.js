const initState = {
    bookmarks: [
        // {
        //     "id": "1-1",
        //     "surat" : {
        //         "arti": "Pembukaan",
        //         "asma": "الفاتحة",
        //         "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/001AlFaatihah.mp3",
        //         "ayat": 7,
        //         "keterangan": "Surat <i>Al Faatihah</i> (Pembukaan) yang diturunkan di Mekah dan terdiri dari 7 ayat adalah surat yang pertama-tama diturunkan dengan lengkap diantara surat-surat yang ada dalam Al Quran dan termasuk golongan surat Makkiyyah. Surat ini disebut <i>Al Faatihah</i> (Pembukaan), karena dengan surat inilah dibuka dan dimulainya Al Quran. Dinamakan <i>Ummul Quran</i> (induk Al Quran) atau <i>Ummul Kitaab</i> (induk Al Kitaab) karena dia merupakan induk dari semua isi Al Quran, dan karena itu diwajibkan membacanya pada tiap-tiap sembahyang.<br> Dinamakan pula <i>As Sab'ul matsaany</i> (tujuh yang berulang-ulang) karena ayatnya tujuh dan dibaca berulang-ulang dalam sholat.",
        //         "nama": "Al Fatihah",
        //         "nomor": "1",
        //         "rukuk": "1",
        //         "type": "mekah",
        //         "urut": "5"
        //     },
        //     "ayat": {
        //         "ar":"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        //         "id":"Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang.",
        //         "nomor":"1",
        //         "tr":"bismi <strong>al</strong>l<u>aa</u>hi <strong>al</strong>rra<u>h</u>m<u>aa</u>ni <strong>al</strong>rra<u>h</u>iim<strong>i</strong>"
        //     }
        // }
    ]
}

const rootReducer = (state = initState, action) => {
    if(action.type == 'ADD_BOOKMARK') {
        return {
            ...state,
            bookmarks: [...state.bookmarks, action.data]
        }
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    }

    if(action.type == 'DELETE_BOOKMARK') {
        let newPost = state.bookmarks.filter((data) => {
            return action.id != data.id
        })
        return {
            ...state,
            bookmarks: newPost
        }
    }

    return state
}

export default rootReducer;