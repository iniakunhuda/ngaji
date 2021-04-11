import { Component } from 'react';
import { Link } from 'react-router-dom';

class SuratCard extends Component {
    state = {
        surat: this.props.surat
    }
    render() {
        return (
            <Link to={'/surat/' + this.state.surat.nomor}>
                <div className="bg-white rounded shadow p-2 mb-2 w-full dark:bg-gray-900 dark:text-white">
                    <div className="flex flex-row items-center">
                        <div className="flex-shrink pr-4">
                            <div className="rounded p-3 text-blue-800 font-bold dark:text-blue-200">
                                { this.state.surat.nomor }
                            </div>
                        </div>
                        <div className="flex-1 text-right md:text-center">
                            <h5 className="font-bold uppercase">{ this.state.surat.nama }</h5>
                            <h3 className="font-normal">{ this.state.surat.asma }</h3>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

export default SuratCard