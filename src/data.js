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
    id: 10-2,
    title: "Hi-Tech 2",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/hi-tech/",
  },
  {
    id: 11,
    title: "JVC Excellent Resolution",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/jvc-excellent-resolution/",
  },
  {
    id: 12,
    title: "Kodak",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/kodak/",
  },
  {
    id: 13,
    title: "Maxell EX",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/maxell-ex/",
  },
  {
    id: 14,
    title: "Maxell G",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/maxell-g/",
  },
  {
    id: 15,
    title: "Maxell GU",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/maxell-gu/",
  },
  {
    id: 16,
    title: "Maxell GX",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/maxell-gx/",
  },
  {
    id: 16-2,
    title: "Maxell GX 2",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/maxell-gx/",
  },
  {
    id: 16-3,
    title: "Maxell GX 3",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/maxell-gx/",
  },
  {
    id: 17,
    title: "Memorex HS",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/memorex-hs/",
  },
  {
    id: 18,
    title: "National NV",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/national-nv/",
  },
  {
    id: 19,
    title: "NEC",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/nec/",
  },
  {
    id: 19-2,
    title: "NEC 2",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/nec/",
  },
  {
    id: 20,
    title: "NEC High Definition",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/nec-high-definition/",
  },
  {
    id: 20-2,
    title: "NEC High Definition 2",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/nec-high-definition/",
  },
  {
    id: 21,
    title: "Nichei",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/nichei/",
  },
  {
    id: 22,
    title: "Onix",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/onix/",
  },
  {
    id: 23,
    title: "Opus",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/opus/",
  },
  {
    id: 24,
    title: "Palsonic HI",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/palsonic-hi/",
  },
  {
    id: 25,
    title: "Panasonic",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/panasonic/",
  },
  {
    id: 26,
    title: "Philips HG",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/philips-hg/",
  },
  {
    id: 26-2,
    title: "Philips HG 2",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/philips-hg/",
  },
  {
    id: 27,
    title: "Philips HG E180",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/philips-hg/",
  },
  {
    id: 28,
    title: "Polaroid High Quality",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/polaroid-high-quality/",
  },
  {
    id: 29,
    title: "Polaroid High Standard",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/polaroid-high-standard/",
  },
  {
    id: 30,
    title: "QTape",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/qtape/",
  },
  {
	  //might not need this one, it's similar to the previous and has a sticker on it
    id: 31,
    title: "QTape E-180",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/qtape/",
  },
  {
    id: 32,
    title: "Raks SQ",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/raks-sq/",
  },
  {
    id: 33,
    title: "Sanyo High Grade E-180",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/sanyo-high-grade/",
  },
  {
	  //similar to the previous
    id: 34,
    title: "Sanyo High Grade E-240",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/sanyo-high-grade/",
  },
	//no scotch EG
  {
    id: 35,
    title: "Sheen",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/sheen/",
  },
  {
    id: 36,
    title: "SKC HQ Maxplay Grade",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/skc-hq-maxplay-grade/",
  },
	//didn't include SKC HQ Maxplay Grade alternate because they were really similar
  {
    id: 37,
    title: "Sony Clarity and Durability",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/sony-clarity-and-durability/",
  },
  {
    id: 38,
    title: "Sony Dynamicron",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/sony-dynamicron/",
  },
  {
    id: 39,
    title: "Sony Dynamicron Durable & Excellent Quality",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/sony-dynamicron-durable-excellent-quality/",
  },
  {
    id: 40,
    title: "Sony Super Durable & Excellent Quality",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/sony-super-durable-excellent-quality/",
  },
  {
    id: 41,
    title: "Sony Super Durable & Excellent Quality 2",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/sony-super-durable-excellent-quality/",
  },
  {
    id: 42,
    title: "Sony Super Durable & Excellent Quality 3",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/sony-super-durable-excellent-quality/",
  },
  {
    id: 43,
    title: "TDK Sharp & Clear",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/tdk-sharp-clear/",
  },
  {
    id: 44,
    title: "TDK Super Avilyn",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/tdk-super-avilyn/",
  },
  {
    id: 45,
    title: "TDK Super Avilyn 2",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/tdk-super-avilyn/",
  },
  {
    id: 46,
    title: "TDK TV",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/tdk-tv/",
  },
  {
    id: 47,
    title: "Teac ASX",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/teac-asx/",
  },
	//could also include 4 hour, but design isn't much different
  {
    id: 48,
    title: "Teac HX",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/teac-hx/",
  },
	//there are 4 different versions of this, just slightly different
  {
    id: 49,
    title: "Teac X-1",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/teac-x-1/",
  },
  {
    id: 50,
    title: "Teac X-2",
    source: "https://goughlui.com/the-vhs-corner/vhs-cassette-library/teac-x-2/",
  },
]

export default data;
