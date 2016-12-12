import React from 'react';
import _ from 'lodash';
import {connect}  from 'react-redux';

import ArticlesActions from 'actions/articles-actions';
import SessionStore from 'lib-app/session-store';
import i18n from 'lib-app/i18n';
import DateTransformer from 'lib-core/date-transformer';

import Header from 'core-components/header';
import Loading from 'core-components/loading';
import BreadCrumb from 'core-components/breadcrumb';

class DashboardArticlePage extends React.Component {

    static propTypes = {
        topics: React.PropTypes.array,
        loading: React.PropTypes.bool
    };

    static defaultProps = {
        topics: [],
        loading: true
    };

    componentDidMount() {
        if(SessionStore.getItem('topics')) {
            this.props.dispatch(ArticlesActions.initArticles());
        } else {
            this.props.dispatch(ArticlesActions.retrieveArticles());
        }
    }

    render() {
        return (
            <div className="dashboard-article-page">
                <div className="dashboard-article-page__breadcrumb">
                    <BreadCrumb items={this.getBreadCrumbItems()}/>
                </div>
                {(this.props.loading) ? <Loading /> : this.renderContent()}
            </div>
        );
    }

    renderContent() {
        let article = this.findArticle();

        return (article) ? this.renderArticlePreview(article) : i18n('ARTICLE_NOT_FOUND');
    }

    renderArticlePreview(article) {
        return (
            <div className="dashboard-article-page__article">
                <Header title={article.title}/>

                <div className="dashboard-article-page__article-content">
                    <div dangerouslySetInnerHTML={{__html: article.content}}/>
                </div>
                <div className="dashboard-article-page__last-edited">
                    {i18n('LAST_EDITED_IN', {date: DateTransformer.transformToString(article.lastEdited, true)})}
                </div>
            </div>
        );
    }

    findArticle() {
        let article = null;

        _.forEach(this.props.topics, (topic) => {
            if(!article) {
                article = _.find(topic.articles, {id: this.props.params.articleId});
            }
        });

        return article;
    }

    findTopic() {
        let topicFound = {};

        _.forEach(this.props.topics, (topic) => {
            if(_.find(topic.articles, {id: this.props.params.articleId})) {
                topicFound = topic;
            }
        });

        return topicFound;
    }

    getBreadCrumbItems() {
        let article = this.findArticle();
        let topic = this.findTopic();
        let items = [
            {content: i18n('ARTICLES'), url: '/dashboard/articles'}
        ];

        if(topic && topic.name) {
            items.push({content: topic.name, url: '/dashboard/articles'});
        }

        if(article && article.title) {
            items.push({content: article.title});
        }

        return items;
    }
}

export default connect((store) => {
    return {
        topics: store.articles.topics,
        loading: store.articles.loading
    };
})(DashboardArticlePage);
