# Ranking System

The ranking system uses the [OpenSkill](https://www.npmjs.com/package/openskill) package using the [plackettLuce](https://cran.rstudio.com/web/packages/PlackettLuce/vignettes/Overview.html) model. 

## Ranking Variables

### mu and sigma

The ranking system is based on these two values:

**mu**, the rating value, higher is better

and

**sigma**,  the standard deviation, shrinks to zero over time

The defaults are:

```json 
{
    "mu": "25",
    "sigma": "5"
}
```

Sigma will reduce your rating growth the closer it is to zero. This means it will take longer to as time goes on to move in ranks.  When the platform enters into "seasons", the sigma will be reset to 5 allowing movement out of previous ranks.

### rating

The rating is calculated with `mu * 100`.  

## Ranking Text

The following text based ranks are used for the game:

```json
let rankTexts = [
    'Wood I',
    'Wood II',
    'Wood III',
    'Wood IV',
    'Bronze I',
    'Bronze II',
    'Bronze III',
    'Bronze IV',
    'Silver I',
    'Silver II',
    'Silver III',
    'Silver IV',
    'Gold I',
    'Gold II',
    'Gold III',
    'Gold IV',
    'Platinum I',
    'Platinum II',
    'Platinum III',
    'Platinum IV',
    'Champion I',
    'Champion II',
    'Champion III',
    'Champion IV',
    'Grand Champion I',
    'Grand Champion II',
    'Grand Champion III',
    'Grand Champion IV',
]
```

The rank text is calculated using this formula:
```js
let rating = player.mu * 100;
let rt = Math.min(5000, Math.max(0, rating));
rt = rt / 5000;
rt = rt * (rankTexts.length - 1);
rt = Math.round(rt);
```

## Ranking Formats

There are two formats that will be supported, although only FFA is supported at this time.

### Free for All

Players are ranked individually and the ratings updated.  You should update the player's rank value to determine who is 1st place or last place. Lower is better, and its not required to have rank=1 for 1st place, as long as only one person has the lowest rank value.


### Teams

In the future, when teams are supported, there will be a team "rank" value.  This value will determine which team wins or loses for the rank system.
