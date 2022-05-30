const data = [
  {
    id: 1,
    title: "ACME Extra High Grade",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/acme-extra-high-grade/",
  },
  {
    id: 2,
    title: "ACME Professional Grade",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/acme-professional-grade/",
  },
  {
    id: 3,
    title: "ACME Super Grade",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/acme-super-grade/",
  },
  {
    id: 4,
    title: "Akai",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/akai/",
  },
  {
    id: 5,
    title: "BASF Extra Quality",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/basf-extra-quality/",
  },
  {
    id: 6,
    title: "Casio AG",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/casio-ag/",
  },
  {
    id: 7,
    title: "Foto Processing",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/foto-processing/",
  },
  {
    id: 8,
    title: "Fuji AG",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/fuji-ag/",
  },
  {
    id: 9,
    title: "G-Tape Premium Performance",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/g-tape-premium-performance/",
  },
//skipped Hitachi High resolution because it didn't include case, just cassette
  {
    id: 10,
    title: "Hi-Tech",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/hi-tech/",
  },
  {
    id: 11,
    title: "Hi-Tech 2",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/hi-tech/",
  },
  {
    id: 12,
    title: "JVC Excellent Resolution",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/jvc-excellent-resolution/",
  },
  {
    id: 13,
    title: "Kodak",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/kodak/",
  },
  {
    id: 14,
    title: "Maxell EX",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/maxell-ex/",
  },
  {
    id: 15,
    title: "Maxell G",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/maxell-g/",
  },
  {
    id: 16,
    title: "Maxell GU",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/maxell-gu/",
  },
  {
    id: 17,
    title: "Maxell GX",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/maxell-gx/",
  },
  {
    id: 18,
    title: "Maxell GX 2",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/maxell-gx/",
  },
  {
    id: 19,
    title: "Maxell GX 3",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/maxell-gx/",
  },
  {
    id: 20,
    title: "Memorex HS",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/memorex-hs/",
  },
  {
    id: 21,
    title: "National NV",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/national-nv/",
  },
  {
    id: 22,
    title: "NEC",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/nec/",
  },
  {
    id: 23,
    title: "NEC 2",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/nec/",
  },
  {
    id: 24,
    title: "NEC High Definition",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/nec-high-definition/",
  },
  {
    id: 25,
    title: "NEC HDx",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/nec-high-definition/",
  },
  {
    id: 26,
    title: "Nichei",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/nichei/",
  },
  {
    id: 27,
    title: "Onix",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/onix/",
  },
  {
    id: 28,
    title: "Opus",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/opus/",
  },
  {
    id: 29,
    title: "Palsonic HI",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/palsonic-hi/",
  },
  {
    id: 30,
    title: "Panasonic",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/panasonic/",
  },
  {
    id: 31,
    title: "Philips HG",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/philips-hg/",
  },
  {
    id: 32,
    title: "Philips HG 2",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/philips-hg/",
  },
  {
    id: 33,
    title: "Philips HG E180",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/philips-hg/",
  },
  {
    id: 34,
    title: "Polaroid High Quality",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/polaroid-high-quality/",
  },
  {
    id: 35,
    title: "Polaroid High Standard",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/polaroid-high-standard/",
  },
  {
    id: 36,
    title: "QTape",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/qtape/",
  },
  {
    id: 37,
    title: "Raks SQ",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/raks-sq/",
  },
  {
    id: 38,
    title: "Sanyo High Grade E-180",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/sanyo-high-grade/",
  },
	//no scotch EG
  {
    id: 39,
    title: "Sheen",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/sheen/",
  },
  {
    id: 40,
    title: "SKC HQ Maxplay Grade",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/skc-hq-maxplay-grade/",
  },
	//didn't include SKC HQ Maxplay Grade alternate because they were really similar
  {
    id: 41,
    title: "Sony Clarity and Durability",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/sony-clarity-and-durability/",
  },
  {
    id: 42,
    title: "Sony Dynamicron",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/sony-dynamicron/",
  },
  {
    id: 43,
    title: "Sony Dynamicron 2",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/sony-dynamicron/",
  },
  {
    id: 44,
    title: "Sony Dynamicron DX",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/sony-dynamicron-durable-excellent-quality/",
  },
  {
    id: 45,
    title: "Sony Super DX",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/sony-super-durable-excellent-quality/",
  },
  {
    id: 46,
    title: "Sony Super DX",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/sony-super-durable-excellent-quality/",
  },
  {
    id: 47,
    title: "Sony Super DX",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/sony-super-durable-excellent-quality/",
  },
  {
    id: 48,
    title: "TDK Sharp & Clear",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/tdk-sharp-clear/",
  },
  {
    id: 49,
    title: "TDK Super Avilyn",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/tdk-super-avilyn/",
  },
  {
    id: 50,
    title: "TDK Super Avilyn 2",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/tdk-super-avilyn/",
  },
  {
    id: 51,
    title: "TDK TV",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/tdk-tv/",
  },
  {
    id: 52,
    title: "Teac ASX",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/teac-asx/",
  },
	//could also include 4 hour, but design isn't much different
  {
    id: 53,
    title: "Teac HX",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/teac-hx/",
    //there are 4 different versions of this, just slightly different
  },
  {
    id: 54,
    title: "Teac X-1",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/teac-x-1/",
  },
  {
    id: 55,
    title: "Teac X-2",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/teac-x-2/",
  },
  {
    id: 56,
    title: "Kodak T-120 VHS Videocassette Tape",
    source: "https://vaultofvhs.tumblr.com/post/117782514965/kodak-t-120-vhs-videocassette-tape"
  },
  {
    id: 57,
    title: "Blockbuster Video High Standard Blank VHS Videocassette Tape",
    source: "https://vaultofvhs.tumblr.com/post/117699029862/blockbuster-video-high-standard-blank-vhs"
  },
  {
    id: 58,
    title: "Fuji HQ T120 VHS Videocassette Tape",
    source: "https://vaultofvhs.tumblr.com/post/117613858129/fuji-hq-t120-vhs-videocassette-tape"
  },
  {
    id: 59,
    title: "TDK Super Avilyn T120 VHS Videocassette Tape",
    source: "https://vaultofvhs.tumblr.com/post/117527737929/tdk-super-avilyn-t120-vhs-videocassette-tape"
  },
  {
    id: 60,
    title: "Sony Dynamicron T-120 VHS Video Cassette Tape",
    source: "https://vaultofvhs.tumblr.com/post/117437723334/sony-dynamicron-t-120-vhs-video-cassette-tape"
  },
  {
    id: 61,
    title: "Sony ES T-120 Dynamicron  VHS Video Cassette Tape",
    source: "https://vaultofvhs.tumblr.com/post/117347702935/sony-es-t-120-dynamicron-vhs-video-cassette-tape"
  },
// skipping https://vaultofvhs.tumblr.com/post/117262708831/absculptor-the-worlds-greatest-abs to keep this sfw
  {
    id: 62,
    title: "Kodak HS T-120  VHS Video Cassette Tape",
    source: "https://vaultofvhs.tumblr.com/post/117179681724/kodak-hs-t-120-vhs-video-cassette-tape"
  },
  {
    id: 63,
    title: "Kodak XHG Extra High Grade T-120  VHS Video Cassette Tape",
    source: "https://vaultofvhs.tumblr.com/post/117094843849/kodak-xhg-extra-high-grade-t-120-vhs-video"
  },
  {
    id: 64,
    title: "Fuji Super HG T-120 Super Fine Beridox  VHS Video Cassette Tape",
    source: "https://vaultofvhs.tumblr.com/post/117009282093/fuji-super-hg-t-120-super-fine-beridox-vhs-video"
  },
  {
    id: 65,
    title: "TDK Super Avilyn T-120  VHS Video Cassette Tape",
    source: "https://vaultofvhs.tumblr.com/post/116924300910/tdk-super-avilyn-t-120-vhs-video-cassette-tape"
  },
  {
    id: 66,
    title: "TDK HS VHS Video Cassette Tape",
    source: "https://vaultofvhs.tumblr.com/post/116919157833/tdk-hs-vhs-video-cassette-tape"
  },
  {
    id: 67,
    title: "60 Second Grill Express Instructional Video VHS Video Cassette Tape",
    source: "https://vaultofvhs.tumblr.com/post/116833144144/60-second-grill-express-instructional-video-vhs"
  },
  {
    id: 68,
    title: "Memorex 6 hour High Stan Video Cas T-12 Good Morning America",
    source: "https://vaultofvhs.tumblr.com/post/116826579604/memorex-6-hour-high-stan-video-cas-t-12-good"
  },
  {
    id: 69,
    title: "Scotch EXG Camera t120 olympics edition",
    source: "https://vaultofvhs.tumblr.com/post/116742196714/scotch-exg-camera-t120-olympics-edition"
  },
  {
    id: 70,
    title: "Polaroid t-120 VHS",
    source: "https://vaultofvhs.tumblr.com/post/116736348065/polaroid-t-120-vhs"
  },
  {
    id: 71,
    title: "JVC Video Cassette T-120 DYNAREC VHS",
    source: "https://vaultofvhs.tumblr.com/post/116650154618/jvc-video-cassette-t-120-dynarec-vhs"
  },
  {
    id: 72,
    title: "Maxell Epitaxial Videocassette t-120 EX VHS",
    source: "https://vaultofvhs.tumblr.com/post/116569345823/maxell-epitaxial-videocassette-t-120-ex-vhs"
  },
  {
    id: 73,
    title: "Polaroid Supercolor High Grade Video Cassette",
    source: "https://vaultofvhs.tumblr.com/post/116564206387/polaroid-supercolor-high-grade-video-cassette"
  },
  {
    id: 74,
    title: "Maxell P/I Plus T-30 VHS",
    source: "https://vaultofvhs.tumblr.com/post/116480255763/maxell-pi-plus-t-30-vhs"
  },
  {
    id: 75,
    title: "Maxell HGX 160 VHS",
    source: "https://vaultofvhs.tumblr.com/post/116475267314/maxell-hgx-160-vhs"
  },
  {
    id: 76,
    title: "Blockbuster High Grade Blank Tape T-120",
    source: "https://vaultofvhs.tumblr.com/post/116395476018/blockbuster-high-grade-blank-tape-t-120"
  },
  {
    id: 77,
    title: "Panasonic Premium STD VHS",
    source: "https://vaultofvhs.tumblr.com/post/116390566410/panasonic-premium-std-vhs"
  },
  {
    id: 78,
    title: "Sony VHS Video Cassette Tape",
    source: "https://vaultofvhs.tumblr.com/post/116304390304/sony-vhs-video-cassette-tape"
  },
  {
    id: 79,
    title: "JVC XR Excellent Resolution 120 VHS",
    source: "https://vaultofvhs.tumblr.com/post/116219173501/jvc-xr-excellent-resolution-120-vhs"
  },
  {
    id: 80,
    title: "Memorex HS 120 VHS",
    source: "https://vaultofvhs.tumblr.com/post/116212823943/memorex-hs-120-vhs"
  },
  {
    id: 81,
    title: "GE Hi Fi 'QVC' VHS",
    source: "https://vaultofvhs.tumblr.com/post/116128258493/ge-hi-fi-qvc-vhs"
  },
  {
    id: 82,
    title: "Sony 'Speech & Debate, Willie, Hector The Clown' VHS",
    source: "https://vaultofvhs.tumblr.com/post/116122468411/sony-speech-debate-willie-hector-the-clown"
  },
  {
    id: 83,
    title: "Body Wise International VHS",
    source: "https://vaultofvhs.tumblr.com/post/116064206630/body-wise-international-vhs"
  },
  {
    id: 84,
    title: "Ampex Videocassette T120 VHS Tape",
    source: "https://vaultofvhs.tumblr.com/post/116042572556/ampex-videocassette-t120-vhs-tape"
  },
  {
    id: 85,
    title: "Focal T120 Quality Videocassette VHS Tape",
    source: "https://vaultofvhs.tumblr.com/post/116039631920/focal-t120-quality-videocassette-vhs-tape"
  },
  {
    id: 86,
    title: "AGFA VHS T-30 Video Cassette Tape",
    source: "https://vaultofvhs.tumblr.com/post/115977188895/agfa-vhs-t-30-video-cassette-tape"
  }
]

// export default data;
