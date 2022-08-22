const API = {
  baseUrl: 'https://api.twitter.com/2',

  /**
   * Make a GET request
   * 
   * @param {string} urlPath
   * @param {object} params
   * @returns {object} 
   */
  get: async (urlPath, params) => {
    // TEMP: static data to build with
    return {
      "data": [
        {
          "id": "1560385194426859521",
          "text": "Linus Tech Tips: I've been waiting TOO long\n\nTranslated: MSI Raider GE67 OLED laptop showcase sponsored by Samsung Display\n\nTitle rating: 1/5 https://t.co/UVWjGi94zu"
        },
        {
          "id": "1560088367454474241",
          "text": "Linus Tech Tips: I hope you don't need internet....\n\nTranslated: They're upgrading their internet and router at the office, so there was some downtime in their connection\n\nTitle rating: 1/5 https://t.co/wUSlzkH9lk"
        },
        {
          "id": "1559765396936343552",
          "text": "Linus Tech Tips: This server lives underwater!\n\nTranslated: Liquid immersion cooling \n\nTitle rating: 4/5 https://t.co/6zE1OIHKSd"
        },
        {
          "id": "1559197940731809794",
          "text": "Linus Tech Tips: The Personal Gaming Theater - HOLY $H!T\n\nTranslated: Sponsored unboxing and demo of the 55\" curved Samsung Odyssey Ark gaming monitor.\n\nTitle rating: 2/5 https://t.co/pEI1o3c3YR"
        },
        {
          "id": "1558914225489182722",
          "text": "Linus Tech Tips: Almost EVERYONE is Wasting Money on Dash Cams.\n\nTranslated: Testing different dash cams and they mostly suck\n\nTitle rating: 3/5 https://t.co/t1vKWsEFDK"
        },
        {
          "id": "1558622070103212032",
          "text": "Translation Translation: Pretty much a @TechLinkedYT episode"
        },
        {
          "id": "1558621934165917696",
          "text": "Linus Tech Tips: Intel tried to keep this from me\n\nTranslated: Look into some SIGGRAPH (A computer graphics conference) news: Intel Arc Pro A40 &amp; A50, SuperMicro's Arctic Sound-M datecenter Arc GPUs, NVIDIA not being there, Plask and Manus\n\nTitle rating: 2/5 https://t.co/GCdoWaz0Hd"
        },
        {
          "id": "1557853543691845634",
          "text": "Linus Tech Tips: We're running out of internet\n\nTranslated: Cacheing server in prep for a LAN, because their internet connection isn't high enough when shared\n\nTitle rating: 2/5 https://t.co/KaQW80iUlR"
        },
        {
          "id": "1557487020397707266",
          "text": "Linus Tech Tips: Somehow THIS Wish com Gaming PC is WORSE!\n\nTranslated: Building another PC using components ordered from Wish... for some reason (they did the same last in 2019)\n\nTitle rating: 4/5 https://t.co/52qKZ72eMr"
        },
        {
          "id": "1557191160225009670",
          "text": "Linus Tech Tips: Roasting YOUR setups, AGAIN.\n\nTranslated: Roasting YOUR setups, AGAIN.\n\nTitle rating: 5/5 https://t.co/UbfW7CZKys"
        },
        {
          "id": "1556693687375204357",
          "text": "Linus Tech Tips: This Cooler Makes No Sense\n\nTranslated: Testing the Fluix Tri-Swift, a turbulent water block with two coolant intakes and not one ??? intake\n\nTitle rating: 1/5 https://t.co/h3AQNFb6ZH"
        },
        {
          "id": "1556374009540902912",
          "text": "Linus Tech Tips: Young People Try Windows 98\n\nTranslated: Young People Try Windows 98\n\nTitle rating: 5/5 https://t.co/F8cXjI66nR"
        },
        {
          "id": "1556032734421712899",
          "text": "Linus Tech Tips: Transmitting video over 20,000ft?! - HOLY $H!T\n\nTranslated: DJI sponsored video about a long distance video transmission system\n\nTitle rating: 4/5 https://t.co/zCp9KhhknB"
        },
        {
          "id": "1555371030692110336",
          "text": "Linus Tech Tips: This is my Endgame\n\nTranslated: Building and deploying the 3.6 petabyte storage server\n\nTitle rating: 1/5 https://t.co/IORwwQNX05"
        },
        {
          "id": "1554944207974010882",
          "text": "Linus Tech Tips: The Glaring Problem with Gaming Monitors\n\nTranslated: Glossy version of the Eve/Dough Spectrum 4K monitor and glossy vs matte monitors in general\n\nTitle rating: 2/5 https://t.co/PaCxfi3Vb8"
        },
        {
          "id": "1554522531822018560",
          "text": "Linus Tech Tips: This Bizarre Fan Cost $1100?!\n\nTranslated: A piezoelectric fan, how it works and who uses it\n\nTitle rating: 4/5 https://t.co/UTAsZmV4lB"
        },
        {
          "id": "1554184900814802945",
          "text": "Linus Tech Tips: Should I take back my $225,000?\n\nTranslated: 1-year follow-up video on Linus' investment in Framework. The answer to the question is: No.\n\nTitle rating: 1/5 https://t.co/s4fb9MXsVT"
        },
        {
          "id": "1553798907548803078",
          "text": "Linus Tech Tips: This Build Never Ends...\n\nTranslated: Part 2 of the tech makeover for TikTok creator Kallmekris\n\nTitle rating: 2/5 https://t.co/DfZYP7TUNI"
        },
        {
          "id": "1553426949846040576",
          "text": "Linus Tech Tips: Don't Buy Everything I Recommend...\n\nTranslated: Retro gaming on old CRT televisions\n\nTitle rating: 1/5 https://t.co/AoZ7eNXydC"
        },
        {
          "id": "1552709855328325632",
          "text": "Linus Tech Tips: This is an SSD?!\n\nTranslated: Pure Storage sponsored look into datacenter SSDs\n\nTitle rating: 3/5 https://t.co/Qlyite2zy9"
        },
        {
          "id": "1552452755603820550",
          "text": "Linus Tech Tips: Let's save some money!\n\nTranslated: Fixing retro console controllers and assorted tips around it \n\nTitle rating: 2/5 https://t.co/qZhEVVHhNe"
        },
        {
          "id": "1552452469241876482",
          "text": "Linus Tech Tips: The ULTIMATE Steam Deck\n\nTranslated: A Steam Deck with upgraded parts such as storage and joysticks\n\nTitle rating: 3/5 https://t.co/lwg6tyD26b"
        },
        {
          "id": "1552452153398140929",
          "text": "Linus Tech Tips: I'm a Genius.\n\nTranslated: Trying out Apple's self-repair tools\n\nTitle rating: 1/5 https://t.co/IaPF1K1EuM"
        },
        {
          "id": "1552451635212853249",
          "text": "Linus Tech Tips: Am I wasting my money?\n\nTranslated: A tour of the LTT Labs\n\nTitle rating: 0/5 https://t.co/n9lp0DB9pJ"
        },
        {
          "id": "1552450849791770626",
          "text": "Linus Tech Tips: Is your Hard Drive DYING?\n\nTranslated: Tips on diagnosing a hard drive's lifespan.\n\nTitle rating: 4/5 https://t.co/v3CI7WhjBL"
        }
      ],
      "meta": {
        "result_count": 25,
        "newest_id": "1560385194426859521",
        "oldest_id": "1552450849791770626"
      }
    };

    // TODO: If response has a next_token, figure out how to get that

    let url = `${API.baseUrl}/${urlPath}`;

    const res = await fetch(url)
      .then(response => response.json())
      .then(data => { return data });

    return res;
  }
}

export default API;
