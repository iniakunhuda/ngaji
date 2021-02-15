import { Component } from 'react';
import Menu from "../components/Menu";
import ContentHome from "../components/ContentHome";

class Home extends Component {
    render() {
        return (
            <>
                <div className="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
                    <Menu active="home" />
                    <ContentHome />
                </div>
            </>
        )
    }
}

export default Home