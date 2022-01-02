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
]
