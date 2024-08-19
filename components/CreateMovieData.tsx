export default function generateMovieData() {
  return fullMovieList;
}

const defaultMovieList = [
  {
    id: 0,
    title: "Wagon Train Warriors",
    description:
      "Pioneers face hardships and hostile forces on their journey westward.",
    headerImage:
      "https://s3.us-west-2.amazonaws.com/whereshouldiski.com/img/ot/movie1-sm.png",
    duration: 100,
  },
  {
    id: 6,
    title: "Frontier Hearts",
    description:
      "Two families bond and clash while traveling together to settle new lands.",
    headerImage:
      "https://s3.us-west-2.amazonaws.com/whereshouldiski.com/img/ot/movie7-sm.png",
    duration: 130,
  },
  {
    id: 1,
    title: "The Journey West",
    description:
      "A family's perilous journey along the Oregon Trail to find a new home.",
    headerImage:
      "https://s3.us-west-2.amazonaws.com/whereshouldiski.com/img/ot/movie2-sm.png",
    duration: 110,
  },
  {
    id: 4,
    title: "Trailblazers",
    description:
      "Adventurous pioneers carve out new paths and face unknown perils in the wilderness.",
    headerImage:
      "https://s3.us-west-2.amazonaws.com/whereshouldiski.com/img/ot/movie5-sm.png",
    duration: 115,
  },
  {
    id: 2,
    title: "Homestead Dreams",
    description:
      "Settlers struggle to build a new life on the frontier amidst challenges and dangers.",
    headerImage:
      "https://s3.us-west-2.amazonaws.com/whereshouldiski.com/img/ot/movie3-sm.png",
    duration: 120,
  },
  {
    id: 3,
    title: "Westward Bound",
    description:
      "A group of pioneers battles the elements and each other on their trek west.",
    headerImage:
      "https://s3.us-west-2.amazonaws.com/whereshouldiski.com/img/ot/movie4-sm.png",
    duration: 95,
  },

  {
    id: 5,
    title: "Prairie Odyssey",
    description:
      "A young couple's journey to the west tests their love and determination.",
    headerImage:
      "https://s3.us-west-2.amazonaws.com/whereshouldiski.com/img/ot/movie6-sm.png",
    duration: 105,
  },
  {
    id: 7,
    title: "Pioneer Spirit",
    description:
      "A resilient widow leads a group of settlers to the promised land of the West.",
    headerImage:
      "https://s3.us-west-2.amazonaws.com/whereshouldiski.com/img/ot/movie8-sm.png",
    duration: 90,
  },
  {
    id: 9,
    title: "The Great Migration",
    description:
      "Hundreds of families embark on a mass migration to California during the Gold Rush.",
    headerImage:
      "https://s3.us-west-2.amazonaws.com/whereshouldiski.com/img/ot/movie10-sm.png",
    duration: 140,
  },
  {
    id: 10,
    title: "Untamed Horizon",
    description:
      "Pioneers face unpredictable challenges as they seek a new beginning in the West.",
    headerImage:
      "https://s3.us-west-2.amazonaws.com/whereshouldiski.com/img/ot/movie11-sm.png",
    duration: 100,
  },
  {
    id: 11,
    title: "Endless Prairie",
    description:
      "A group of settlers confronts endless prairies and relentless weather on their journey.",
    headerImage:
      "https://s3.us-west-2.amazonaws.com/whereshouldiski.com/img/ot/movie12-sm.png",
    duration: 115,
  },
  {
    id: 12,
    title: "Crossing the Divide",
    description:
      "Families face immense trials as they cross the Continental Divide.",
    headerImage:
      "https://s3.us-west-2.amazonaws.com/whereshouldiski.com/img/ot/movie13-sm.png",
    duration: 120,
  },
  {
    id: 13,
    title: "Frontier Faith",
    description:
      "A preacher and his flock encounter trials of faith on their way to the West.",
    headerImage:
      "https://s3.us-west-2.amazonaws.com/whereshouldiski.com/img/ot/movie14-sm.png",
    duration: 100,
  },
  {
    id: 14,
    title: "Pioneer's Path",
    description:
      "A young pioneer girl narrates her family's adventures and struggles on the frontier.",
    headerImage:
      "https://s3.us-west-2.amazonaws.com/whereshouldiski.com/img/ot/movie15-sm.png",
    duration: 85,
  },
];

const fullMovieList = defaultMovieList.concat(defaultMovieList, defaultMovieList);
