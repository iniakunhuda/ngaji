import { Component } from 'react';
import SuratCard from "./SuratCard";
import axios from 'axios';
import Menu from "./Menu";
import ContentHome from "./ContentHome";

class SuratList extends Component {
    componentDidMount() {
        axios.get('https://al-quran-8d642.firebaseio.com/data.json')
            .then(res => {
                this.setState({
                    surats: res.data
                })
            })
    }

    state = {
        surats: []
    }

    render() {
        const suratList = this.state.surats.length ? (
            this.state.surats.map((surat) => {
                return (
                    <div key={surat.nomor}>
                        <SuratCard surat={surat} />
                    </div>
                )
            })
        ) : (
            <div>Sedang mengambil data...</div>
        )

        return (
            <div className="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
                <Menu active="surat" />
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 lg:w-4/5 md:w-full sm:w-full w-full">
                    { suratList }
                </div>
            </div>
        )
    }
}

export default SuratList