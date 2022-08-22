import API from './api.js';
import Tweets from './tweets.js';

export const main = () => {
  console.log('====================');
  console.log('Initializing…')
  console.log('====================');

  const replaceTitles = async () => {
    // Get LTT Translator tweets
    const tweets = await API.get('users/1552448356965916676/tweets');

    // Build a dictionary of the real titles and their translations
    Tweets.parse(tweets.data);

    // Traverse the page and replace matching titles
    if (Object.keys(Tweets.dictionary).length > 0) {
      // First, build an array of all elements that could have text
      // const nodes = document.evaluate('.//*[not(self::script) and not(*)]', document, null, XPathResult.ANY_TYPE, null);
      // const elements = []
      // let nextNode = nodes.iterateNext();

      // while (nextNode) {
      //   elements.push(nextNode)
      //   nextNode = nodes.iterateNext();
      // }

      // console.log('Here are all the possible elements with clickbait titles in them:');
      // console.log(elements);

      const elements = document.querySelectorAll('yt-formatted-string:not(.ltt-title-fixed), #video-title:not(.title--fixed)');

      // Then loop through keys and look for elements with matching text
      Object.keys(Tweets.dictionary).forEach(key => {
        elements.forEach(titleElement => {
          if (titleElement.textContent && titleElement.textContent.includes(key)) {
            titleElement.textContent = `☺ ${Tweets.dictionary[key]}`;
            titleElement.title = Tweets.dictionary[key];
            titleElement.classList.add('ltt-title--fixed');

            // If this is clearly a sponsored video, try to flag it
            if (Tweets.dictionary[key].toLowerCase().includes('sponsor')) {
              let parentElement = titleElement.closest('ytd-grid-video-renderer') || titleElement.closest('ytd-video-renderer');
              
              if (parentElement) {
                const thumbnail = parentElement.querySelector('ytd-thumbnail');
                const sponsorFlag = document.createElement('span');
                sponsorFlag.className = 'ltt-sponsored';
                sponsorFlag.textContent = '💵 Sponsored Video 💵';
                
                thumbnail?.append(sponsorFlag);

                console.log('sponsored content flagged');
              }
            }

          }
        });
      })
    }
  }

  // HACK: Find a better way to make sure the data has fully
  // loaded. Right now we’re just going to add a delay and
  // check for titles a second time.
  const hackyReplaceTitles = () => {
    replaceTitles();

    setTimeout(() => {
      replaceTitles();
    }, 2500);

    setTimeout(() => {
      replaceTitles();
    }, 5000);
  }

  hackyReplaceTitles();
  window.addEventListener('yt-navigate-finish', hackyReplaceTitles)
}
