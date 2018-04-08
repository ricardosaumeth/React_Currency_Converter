import 
  { ExchangeConversionType, exchangeConverter }
  from '../exchangeConverter-utils'

import loopNestedObj from '../formatXML-utils'  

const data = {
  "gesmes:Envelope": {
    "$": {
      "xmlns:gesmes": "http://www.gesmes.org/xml/2002-08-01",
      "xmlns": "http://www.ecb.int/vocabulary/2002-08-01/eurofxref"
    },
    "gesmes:subject": [
      "Reference rates"
    ],
    "gesmes:Sender": [
      {
        "gesmes:name": [
          "European Central Bank"
        ]
      }
    ],
    "Cube": [
      {
        "Cube": [
          {
            "$": {
              "time": "2018-04-06"
            },
            "Cube": [
              {
                "$": {
                  "currency": "USD",
                  "rate": "1.2234"
                }
              }
            ]
          }
        ]
      }
    ]
  }
};

const formattedData = [
  {
    "$": {
      "currency": "USD",
      "rate": "1.2234"
    }
  }
];


it('should calculate the exchange rate USD/JPY', () => {
  const USDQuantity = 2; 
  const result = exchangeConverter(ExchangeConversionType.First, USDQuantity, 1.2234, 131.32);
  expect(result).toBe(214.68039888834394);
});

it('should calculate the exchange rate JPY/UDS', () => {
  const USDQuantity = 500; 
  const result = exchangeConverter(ExchangeConversionType.Second, USDQuantity, 1.2234, 131.32);
  expect(result).toBe(4.658087115443193);
});

/**
 * Jest is not able to process these object. Need to investigate
 */
xit('formatXML', () => {
  expect(formattedData).toEqual(loopNestedObj(data));
});
