import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';

import NewsCard from './NewsCard/NewsCard';
import useStyles from './styles.js';

const infoCards = [
  { color: 'rgba(255, 255, 255, 0.25)', title: 'Latest News', info:'latest news/ recent news', text:'show me the latest news' },
  { color: 'rgba(255, 255, 255, 0.25)', title: 'categories', info: 'Sports, Entertainment, Technology, Health, bussiness,', text: 'show latest Technology news' },
  { color: 'rgba(255, 255, 255, 0.25)', title: 'News by Terms', info: 'Coronavirus, cricket, Smartphones, laptop, etc', text: 'What\'s up with corona virus' },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={2}>
          {infoCards.map((infoCard) => (
            <Grid item xs={12} sm={6} md={10} lg={4} className={classes.infoCard}>
              <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                <Typography variant="h5" component="h5">{infoCard.title}</Typography>
                {infoCard.info ? <Typography variant="h6" component="h6">{infoCard.info}<br /><strong>Try saying: <br /> <i>{infoCard.text}</i></strong></Typography> : null}

           </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
            <NewsCard activeArticle={activeArticle} i={i} article={article} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
