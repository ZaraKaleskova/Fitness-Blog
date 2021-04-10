import React from 'react';

import { client } from '../../../contentful';
import Posts from './Posts'

class AllNutritionArticles extends React.Component {
    state = {
        nutrition: []
    }

    componentDidMount() {
        client.getEntries({ content_type: 'nutrition' })
            .then((response) => {
                console.log(response)
                this.setState({
                    nutrition: response.items
                })
            })
            .catch(console.error)
    }

    render() {
        return (
            <div className="App">
                <div className='container'>
                    <header>
                        <div className='wrapper'>
                            <span className='logo'>Nutrition articles</span>
                        </div>
                    </header>
                    <main>
                        <div className='wrapper'>
                            <Posts posts={this.state.nutrition} />
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

export default AllNutritionArticles;