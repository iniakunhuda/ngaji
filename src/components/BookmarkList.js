import { Component } from 'react';
import SuratCard from "./SuratCard";
import Menu from "./Menu";
import { connect } from 'react-redux';
import {Link} from "react-router-dom";

import { deleteBookmark } from "../actions/bookmarkAction";

class BookmarkList extends Component {
    state = {
        terjemahan: false
    }

    toggleTerjemahan = () => {
        this.setState({ terjemahan: !this.state.terjemahan });
    }

    handleDelete = (e, id) => {
        e.preventDefault();
        this.props.deleteBookmark(id);
    }

    render() {
        const { bookmarks } = this.props;
        const suratList = ((bookmarks != undefined) && (bookmarks.length)) ? (
            bookmarks.map((data) => {
                return (
                    <div className="group " key={data.id}>
                        <Link title="Lihat Detail Ayat" to={'/surat/' + data.surat.nomor}>
                            <button onClick={(e) => this.handleDelete(e, data.id)} className="bg-red-500 hover:bg-red-700 text-white opacity-0 group-hover:opacity-100 px-3 py-1 text-sm w-full">Hapus dari Bookmark</button>
                            <div className="bg-white rounded shadow p-2 mb-2 w-full dark:bg-gray-800 dark:text-white">
                                <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                                    <div className="text-right md:text-center">
                                        <h5 className="font-bold uppercase">{ data.surat.nama }</h5>
                                        <h3 className="font-normal mb-3">{ data.surat.asma } &mdash; Ayat ke-{ data.ayat.nomor }</h3>
                                    </div>
                                    <div className="text-right md:text-center">
                                        <h3 className="text-4xl font-bold mt-5 mb-5">{ data.ayat.ar }</h3>
                                        <h3 className="font-normal opacity-50"
                                            dangerouslySetInnerHTML={{ __html: data.ayat.tr}}
                                        />
                                        <h5 className={"font-normal opacity-70 mt-10 mb-10"}>{ data.ayat.id }</h5>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })
        ) : (
            <div></div>
        )

        return (
            <div className="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
                <Menu active="bookmark" />
                <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-4 lg:w-4/5 md:w-full sm:w-full w-full">
                    <h1>List Ayat yang disimpan</h1>
                    <div className="mt-2">
                        { suratList }
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
        deleteBookmark: (id) => { dispatch(deleteBookmark(id)) }
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(BookmarkList)