import { Component } from 'react';
import axios from 'axios';
import Menu from "./Menu";

import {FaEye, FaEyeSlash, FaPause, FaPlay, FaBookmark, FaRegBookmark} from "react-icons/fa";
import {addBookmark, deleteBookmark} from "../actions/bookmarkAction";
import { connect } from 'react-redux';

class SuratDetail extends Component {
    componentDidMount() {
        let id = this.props.match.params.id;

        axios.get('https://al-quran-8d642.firebaseio.com/data.json')
            .then(res => {
                let surat = res.data.filter((sr) => sr.nomor == id)
                this.setState({
                    surat: surat[0],
                    audio: new Audio(surat[0].audio)
                })

                this.state.audio.addEventListener('ended', () => this.setState({ play: false }))
            })

        axios.get('https://al-quran-8d642.firebaseio.com/surat/'+ id +'.json')
            .then(res => {
                this.setState({
                    ayats: res.data
                })
            })

    }

    componentWillUnmount() {
        this.state.audio.pause();
        this.state.audio.src = '';
        this.setState({
            audio: null
        })
    }

    state = {
        audio: null,
        terjemahan: false,
        play: false,
        surat: {
            nama: '',
            keterangan: '',
            audio: ''
        },
        ayats: []
    }

    togglePlay = () => {
        this.setState({ play: !this.state.play }, () => {
            this.state.play ? this.state.audio.play() : this.state.audio.pause();
        });
    }

    toggleTerjemahan = () => {
        this.setState({ terjemahan: !this.state.terjemahan });
    }

    isBookmarked = (id) => {
        return this.props.bookmarks.filter((book) => id == book.id).length > 0
    }

    addBookmark = (ayat) => {
        let data = {
            "id": this.state.surat.nomor + "-" + ayat.nomor,
            "surat" : this.state.surat,
            "ayat": ayat
        }
        this.props.addBookmark(data)
    }

    removeBookmark = (id) => {
        this.props.removeBookmark(id)
    }

    render() {
        const ayatList = this.state.ayats.length ? (
            this.state.ayats.map((ayat) => {

                const key = this.state.surat.nomor + '-' + ayat.nomor;
                const btnBookmarkNotClicked = <FaRegBookmark onClick={() => this.addBookmark(ayat)} />;
                const btnBookmarkClicked = <FaBookmark onClick={() => this.removeBookmark(key)} />;
                let btnBookmark;

                if(this.isBookmarked(key)) {
                    btnBookmark = btnBookmarkClicked;
                } else {
                    btnBookmark = btnBookmarkNotClicked;
                }

                return (
                    <div key={ayat.nomor}>
                        <div className="bg-white rounded shadow p-10 mb-8 w-full dark:bg-gray-900 dark:text-white">
                            <div className="flex flex-row items-center">
                                <div className="flex-shrink pr-4">
                                    <div className="rounded p-3 text-blue-800 font-bold dark:text-blue-200">
                                        { ayat.nomor }
                                    </div>
                                </div>
                                <div className="flex-1 text-right md:text-center">
                                    <h3 className="text-4xl font-bold mb-5">{ ayat.ar }</h3>
                                    <h3 className="font-normal opacity-50"
                                        dangerouslySetInnerHTML={{ __html: ayat.tr}}
                                    />
                                    <h5 className={ "font-normal opacity-70 mt-10" +
                                        (!this.state.terjemahan  ? ' hidden' : '')
                                    }>{ ayat.id }</h5>
                                </div>
                                <div className="flex-shrink pr-4">
                                    <div className="rounded p-3 font-bold">
                                        { btnBookmark }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        ) : (
            <div>Sedang mengambil data...</div>
        )
        return (
            <div className="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
                <Menu active="surat" />
                <div className="w-full lg:w-4/5 lg:px-6">
                    <h1 className="text-3xl mb-3">{ this.state.surat.nama }</h1>
                    <p className="text-opacity-40 mb-7"
                       dangerouslySetInnerHTML={{__html: this.state.surat.keterangan }}
                    />
                    <button
                        onClick={this.togglePlay}
                        className="bg-blue-500 inline-flex hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  dark:bg-gray-800 dark:text-white">

                        { !this.state.play ? <FaPlay className="h-6 mr-2"/> : <FaPause className="h-6 mr-2"/> }
                        <span>
                            { !this.state.play ? 'Putar' : 'Jeda' } Audio
                        </span>

                    </button>
                    <button
                        onClick={this.toggleTerjemahan}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold inline-flex py-2 px-4 rounded ml-5  dark:bg-gray-800 dark:text-white">

                        { !this.state.terjemahan ? <FaEye className="h-6 mr-2"/> : <FaEyeSlash className="h-6 mr-2"/> }

                        <span>
                            { this.state.terjemahan ? 'Sembunyikan' : 'Tampilkan' } Terjemahan
                        </span>
                    </button>

                    <div className="mt-10">
                        { ayatList }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bookmarks: state.bookmarks
    }
}

const mapStateToDispatch = (dispatch) => {
    return {
        addBookmark: (id) => { dispatch(addBookmark(id)) },
        removeBookmark: (id) => { dispatch(deleteBookmark(id)) }
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(SuratDetail)