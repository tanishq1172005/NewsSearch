import NewsItem from "./NewsItem";

export default function News(){
    const article= [
      {
        "source": {
          "id": null,
          "name": "CNBC"
        },
        "author": "Brian Evans",
        "title": "S&P 500 stock futures rise after Microsoft, Meta post earnings beats: Live updates - CNBC",
        "description": "Quarterly results from Microsoft and Meta Platforms surpassed analyst estimates.",
        "url": "https://www.cnbc.com/2025/04/30/stock-market-today-live-updates.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/108117066-1742234063664-NYSE_Traders-OB-Photo-20250317-CC-PRESS-13.jpg?v=1742234146&w=1920&h=1080",
        "publishedAt": "2025-05-01T04:58:00Z",
        "content": "Stock futures rose early Thursday after two Big Tech players posted quarterly results.\r\nFutures tied to the Dow Jones Industrial Average climbed 219 points, or 0.54%. S&amp;P 500 futures jumped 1.02%… [+2663 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "New York Post"
        },
        "author": "Christian Arnold",
        "title": "Bill Belichick’s daughter-in-law shades Jordon Hudson as CBS interview drama grows - New York Post",
        "description": "Bill Belichick’s daughter-in-law weighed in on the ongoing drama involving his 24-year-old girlfriend, Jordan Hudson the famed football coach and his “CBS Sunday Morning” interview.",
        "url": "https://nypost.com/2025/05/01/sports/bill-belichicks-daughter-in-law-shades-jordon-hudson-over-cbs-interview/",
        "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2025/04/newspress-collage-z4evroe05-1746070448663.jpg?quality=75&strip=all&1746056211&w=1024",
        "publishedAt": "2025-05-01T04:02:00Z",
        "content": "Bill Belichicks daughter-in-law weighed in on the ongoing drama involving his 24-year-old girlfriend Jordan Hudson, the famed football coach and his CBS Sunday Morning interview. \r\nJennifer Schmitt, … [+3336 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": null,
        "title": "Mushroom trial: 'very rare' for accused to hold gatherings, says ex-husband - BBC",
        "description": "Three people died in hospital after being poisoned with death cap mushrooms.",
        "url": "https://www.bbc.com/news/articles/c2dek63gxp6o",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1f06/live/21dbe990-2643-11f0-a20d-1d8f85937283.jpg",
        "publishedAt": "2025-05-01T03:18:47Z",
        "content": "Simon Atkinson and Katy Watson\r\nSimon Patterson was invited to the fatal meal prepared by Erin Patterson - but decided not to attend the day before\r\nThe estranged husband of a woman who served a pois… [+7289 chars]"
      },
      {
        "source": {
          "id": "politico",
          "name": "Politico"
        },
        "author": "Mia McCarthy, Ben Leonard",
        "title": "E&C chair still struggling to rally members behind massive cuts - Politico",
        "description": "Two meetings in one day and Republicans still don't know deeply they'll be able to cut Medicaid.",
        "url": "https://www.politico.com/live-updates/2025/04/30/congress/e-c-chair-still-struggling-to-rally-members-behind-massive-cuts-00320462",
        "urlToImage": "https://www.politico.com/dims4/default/a14684a/2147483647/resize/1200x/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2Fca%2F13%2Faeceb35b437583f78bc2746cb412%2Fmorgan-griffiths-17159.jpg",
        "publishedAt": "2025-05-01T03:11:18Z",
        "content": null
      },
      {
        "source": {
          "id": "politico",
          "name": "Politico"
        },
        "author": "Associated Press",
        "title": "Epicenter of explosion at Iranian port tied to charity overseen by its supreme leader - Politico",
        "description": "“It’s known that Iran has been doing all kinds of sanctions busting and so on in order to supply their weapons program,” said Andrea Sella, a professor of chemistry.",
        "url": "https://www.politico.com/news/2025/04/30/epicenter-of-explosion-at-iranian-port-tied-to-charity-overseen-by-its-supreme-leader-00320459",
        "urlToImage": "https://static.politico.com/95/6e/a0b5935a4f9da3ab4f3f2f3ba1cd/iran-explosion-89188.jpg",
        "publishedAt": "2025-05-01T03:04:00Z",
        "content": "Its known that Iran has been doing all kinds of sanctions busting and so on in order to supply their weapons program, said Andrea Sella, a professor of chemistry at the University College London. The… [+5066 chars]"
      },
      {
        "source": {
          "id": "the-hill",
          "name": "The Hill"
        },
        "author": "Julia Mueller, Jared Gans",
        "title": "5 takeaways from Trump NewsNation town hall - The Hill",
        "description": "President Trump on Wednesday called in to NewsNation for a town hall program marking the first 100-day milestone of his second term in the Oval Office.   Rounding out a media blitz to celebrate the benchmark, Trump brushed off concerns about his polling and p…",
        "url": "https://thehill.com/homenews/administration/5276553-trump-newsnation-town-hall-100-days/",
        "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2025/04/NNN_8254_60bf8b-e1746062652111.jpg?w=1280",
        "publishedAt": "2025-05-01T02:42:00Z",
        "content": "Skip to content\r\nPresident Trump on Wednesday called in to NewsNation for a town hall program marking the first 100-day milestone of his second term in the Oval Office.  \r\nRounding out a media blitz … [+7054 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Rolling Stone"
        },
        "author": "Charisma Madarang",
        "title": "Robert De Niro Shares 'Love and Support' for Daughter Airyn as She Embraces Trans Identity - Rolling Stone",
        "description": "Robert De Niro showed his “love and support” for his daughter Airyn De Niro, who recently opened up about her identity publicly.",
        "url": "http://www.rollingstone.com/tv-movies/tv-movie-news/robert-de-niro-support-daughter-airyn-trans-identity-1235329213/",
        "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2025/04/robert-de-niro.jpg?w=1600&h=900&crop=1",
        "publishedAt": "2025-05-01T01:51:03Z",
        "content": "Robert De Niro showed his “love and support” for his daughter Airyn De Niro, who recently opened up about her identity publicly.\r\n“I loved and supported Aaron as my son, and now I love and support Ai… [+1741 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "NPR"
        },
        "author": "",
        "title": "May Day protesters will rally nationwide against the 'war on working people' - NPR",
        "description": "May Day is not officially acknowledged in the U.S. because of what historians say is an ongoing resistance to unity among the working class. This resistance is prompting protesters to take action on Thursday, regardless.",
        "url": "https://www.npr.org/2025/04/30/nx-s1-5382560/may-day-protests-history-trump",
        "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/2485x1398+0+308/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F0c%2F4e%2F328520d34570beea14baf107aab1%2Fap18121187248316.jpg",
        "publishedAt": "2025-05-01T01:45:08Z",
        "content": "Tens of thousands of protesters are expected to take to the streets nationwide on Thursday in May Day rallies opposing the Trump administration.\r\nMay Day, celebrated by workers across the globe as In… [+4130 chars]"
      },
      {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Morgan Rimmer, Ted  Barrett, Manu Raju",
        "title": "Vice President Vance casts tie-breaking Senate vote to kill bipartisan effort to rebuke Trump’s trade policy - CNN",
        "description": "Vice President JD Vance late Wednesday cast a tie-breaking vote to kill a bipartisan effort to rebuke President Donald Trump’s tariffs in the Senate.",
        "url": "https://www.cnn.com/2025/04/30/politics/senate-republicans-democrats-trump-tariffs/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/still-21493446-2677770-still.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2025-05-01T01:03:00Z",
        "content": "Vice President JD Vance traveled to Capitol Hill late Wednesday to cast a tie-breaking vote in the Senate that killed a bipartisan effort to rebuke President Donald Trumps trade policy.\r\nEarlier in t… [+2943 chars]"
      },
      {
        "source": {
          "id": "associated-press",
          "name": "Associated Press"
        },
        "author": "Josh Boak",
        "title": "Trump says US kids may get ‘2 dolls instead of 30,’ but China will suffer more in a trade war - AP News",
        "description": "President Donald Trump is acknowledging that his tariffs could result in fewer and costlier products in the United States. He says American kids might \"have two dolls instead of 30 dolls.” But he's also insisting China will suffer more from his trade war. The…",
        "url": "https://apnews.com/article/trump-economy-tariffs-gdp-7494825851dcef94ec81475124f9326f",
        "urlToImage": "https://dims.apnews.com/dims4/default/bff48f4/2147483647/strip/true/crop/5277x2968+0+275/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F11%2F7b%2F558d6e1629b2288d60d902e16b61%2Fd6ca0c43c29949958e40647ccb3cf416",
        "publishedAt": "2025-05-01T00:44:00Z",
        "content": "WASHINGTON (AP) President Donald Trump on Wednesday acknowledged that his tariffs could result in fewer and costlier products in the United States, saying American kids might have two dolls instead o… [+5970 chars]"
      },
      {
        "source": {
          "id": "the-washington-post",
          "name": "The Washington Post"
        },
        "author": "Rachel Lerman",
        "title": "Here’s how GDP shows tariffs are starting to take a toll - The Washington Post",
        "description": "Few pieces of the first-quarter GDP report remained untouched by the Trump administration’s tariff policy.",
        "url": "https://www.washingtonpost.com/business/2025/04/30/gdp-tariff-economy-consumer-spending/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/5OQQIYEZGFB3RDCVAS4SOBL4ZI.jpg&w=1440",
        "publishedAt": "2025-05-01T00:31:48Z",
        "content": "The much-anticipated report on the nations economy released Wednesday showed that the U.S. economy shrank during the first three months of the year offering the first window into the widespread effec… [+696 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "NBCSports.com"
        },
        "author": "Mike Florio",
        "title": "NFL sent Shedeur Sanders’s phone number directly to Jeff Ulbrich - NBC Sports",
        "description": "The league, not the Falcons, gave Ulbrich the number.",
        "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/nfl-sent-shedeur-sanderss-phone-number-directly-to-jeff-ulbrich",
        "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/cfd079f/2147483647/strip/true/crop/4256x2394+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2Ff3%2Ff2%2Fa5b37861405f9827338d94bcaed2%2Fhttps-api-imagn.com%2Frest%2Fdownload%2FimageID%3D25048366",
        "publishedAt": "2025-04-30T23:38:57Z",
        "content": "In the aftermath of the NFLs decision to fine the Falcons $250,000 and defensive coordinator Jeff Ulbrich $100,000 for failing to prevent the disclosure of confidential information distributed to the… [+2035 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "hoopsrumors.com"
        },
        "author": null,
        "title": "Bucks Notes: Giannis, Rivers, LaVine, Horst - Hoops Rumors",
        "description": "Giannis Antetokounmpo will meet with Bucks management soon as he faces a decision that could change the course of the franchise.",
        "url": "https://www.hoopsrumors.com/2025/04/bucks-notes-giannis-rivers-lavine-horst.html",
        "urlToImage": "https://cdn.hoopsrumors.com/files/2024/11/Giannis-Antetokounmpo-1-900x600.jpg",
        "publishedAt": "2025-04-30T23:14:00Z",
        "content": "Now that the Bucks‘ season is over, Giannis Antetokounmpo will meet with management to discuss plans for his future and the team’s, writes Jamal Collier of ESPN, citing sources who spoke with the net… [+3821 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Deadline"
        },
        "author": "Armando Tinoco",
        "title": "'The View's Ana Navarro Praises ABC News' Terry Moran After Donald Trump Interview, Saying He \"Gave A Masterclass In Journalism\" - Deadline",
        "description": "Ana Navarro is praising her ABC News colleague Terry Moran following his contentious interview with Donald Trump.",
        "url": "http://deadline.com/2025/04/the-view-ana-navarro-praises-abc-news-terry-moran-donald-trump-interview-1236381801/",
        "urlToImage": "https://deadline.com/wp-content/uploads/2025/04/ana-navarro-terry-moran-donald-trump.jpg?w=1024",
        "publishedAt": "2025-04-30T22:15:00Z",
        "content": "Ana Navarro is praising her ABC News colleague Terry Moran following his contentious interview with Donald Trump.\r\nThe political analyst took to social media to highlight Moran’s skills and not backi… [+1516 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Hollywood Reporter"
        },
        "author": "McKinley Franklin",
        "title": "Chappell Roan Recalls ‘The Voice’ Audition Where Producer “Did Not Even Look Up From His Phone” - The Hollywood Reporter",
        "description": "“I didn’t make it on the show, obviously,” the Grammy winner previously said of her time with the NBC reality show.",
        "url": "http://www.hollywoodreporter.com/news/music-news/chappell-roan-the-voice-audition-producer-not-look-up-phone-1236204468/",
        "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2025/02/GettyImages-2197323780.jpg?w=1440&h=810&crop=1",
        "publishedAt": "2025-04-30T21:56:27Z",
        "content": "Chappell Roan has won a Grammy, performed in front of one of the biggest Lollapalooza crowds of all time and finds no problem establishing boundaries as a rising star. However, one of the “scariest t… [+1777 chars]"
      },
      {
        "source": {
          "id": "nbc-news",
          "name": "NBC News"
        },
        "author": "Berkeley Lovelace Jr.",
        "title": "Wegovy treated a serious form of liver disease in a major clinical trial - NBC News",
        "description": "The weight loss drug Wegovy treated a serious form of liver disease in about two-thirds of patients in a major clinical trial, according to the findings published Wednesday in the New England Journal of Medicine.",
        "url": "https://www.nbcnews.com/health/health-news/wegovy-treated-serious-form-liver-disease-major-clinical-trial-rcna203677",
        "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-05/240514-wegovy-ch-1040-a1f5f2.jpg",
        "publishedAt": "2025-04-30T21:17:18Z",
        "content": "The weight loss drug Wegovy treated a serious form of liver disease in about two-thirds of patients in a major clinical trial, according to the findings published Wednesday in the New England Journal… [+5459 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Variety"
        },
        "author": "Pat Saperstein",
        "title": "‘Rust’ Director Says He Didn’t Watch Alec Baldwin’s Reality Show: ‘I Think I Was Busy Hitting Myself in the Face With a Frying Pan That Night’ - Variety",
        "description": "'Rust' director Joel Souza says he couldn't have imagined anyone else completing the Western after the accident that killed D.P. Halyna Hutchins.",
        "url": "https://variety.com/2025/film/news/rust-director-wishes-never-wrote-alec-baldwin-movie-1236383026/",
        "urlToImage": "https://variety.com/wp-content/uploads/2025/04/MCDRUST_EC032.jpg?w=1000&h=563&crop=1",
        "publishedAt": "2025-04-30T21:09:00Z",
        "content": "“Rust” director Joel Souza says he couldn’t have imagined anyone else completing the Western movie after the on-set accident that killed cinematographer Halyna Hutchins when Alec Baldwin‘s gun accide… [+1523 chars]"
      },
      {
        "source": {
          "id": "abc-news",
          "name": "ABC News"
        },
        "author": "ABC News",
        "title": "Kamala Harris steps back into limelight as Trump celebrates his first 100 days - ABC News",
        "description": null,
        "url": "https://abcnews.go.com/Politics/kamala-harris-steps-back-limelight-trump-celebrates-100/story?id\\\\u003d121323724",
        "urlToImage": null,
        "publishedAt": "2025-04-30T20:49:22Z",
        "content": null
      }
    ]
    
    return(<>
        <div className="container my-3">
            <h2>News Monkey-Top headlines</h2>
            <div className="row">
              {article.map((element)=>(<div className="col md-4" key={element.url}>
                <NewsItem title={element.title} description={element.description}
                url={element.urlToImage} news={element.url}/>
              </div>))}
            </div>
        </div>
        
        </>
    );
}