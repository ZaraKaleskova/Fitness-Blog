import React from 'react';

import { client } from '../../../contentful';
import Posts from './Posts'

class AllTrainingArticles extends React.Component {
    state = {
        articles: []
    }

    componentDidMount() {
        client.getEntries({ content_type: 'articles' })
            .then((response) => {
                console.log(response)
                this.setState({
                    articles: response.items
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
                            <span className='logo'>Training Articles</span>
                        </div>
                    </header>
                    <main>
                        <div className='wrapper'>
                            <Posts posts={this.state.articles} />
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

export default AllTrainingArticles;
