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
              },
              {
                "$": {
                  "currency": "JPY",
                  "rate": "131.32"
                }
              },
              {
                "$": {
                  "currency": "BGN",
                  "rate": "1.9558"
                }
              },
              {
                "$": {
                  "currency": "CZK",
                  "rate": "25.339"
                }
              },
              {
                "$": {
                  "currency": "DKK",
                  "rate": "7.4474"
                }
              },
              {
                "$": {
                  "currency": "GBP",
                  "rate": "0.87295"
                }
              },
              {
                "$": {
                  "currency": "HUF",
                  "rate": "312.56"
                }
              },
              {
                "$": {
                  "currency": "PLN",
                  "rate": "4.1983"
                }
              },
              {
                "$": {
                  "currency": "RON",
                  "rate": "4.6636"
                }
              },
              {
                "$": {
                  "currency": "SEK",
                  "rate": "10.2983"
                }
              },
              {
                "$": {
                  "currency": "CHF",
                  "rate": "1.1798"
                }
              },
              {
                "$": {
                  "currency": "ISK",
                  "rate": "121.30"
                }
              },
              {
                "$": {
                  "currency": "NOK",
                  "rate": "9.5860"
                }
              },
              {
                "$": {
                  "currency": "HRK",
                  "rate": "7.4240"
                }
              },
              {
                "$": {
                  "currency": "RUB",
                  "rate": "70.8270"
                }
              },
              {
                "$": {
                  "currency": "TRY",
                  "rate": "4.9644"
                }
              },
              {
                "$": {
                  "currency": "AUD",
                  "rate": "1.5934"
                }
              },
              {
                "$": {
                  "currency": "BRL",
                  "rate": "4.1111"
                }
              },
              {
                "$": {
                  "currency": "CAD",
                  "rate": "1.5650"
                }
              },
              {
                "$": {
                  "currency": "CNY",
                  "rate": "7.7138"
                }
              },
              {
                "$": {
                  "currency": "HKD",
                  "rate": "9.6014"
                }
              },
              {
                "$": {
                  "currency": "IDR",
                  "rate": "16850.50"
                }
              },
              {
                "$": {
                  "currency": "ILS",
                  "rate": "4.3262"
                }
              },
              {
                "$": {
                  "currency": "INR",
                  "rate": "79.4810"
                }
              },
              {
                "$": {
                  "currency": "KRW",
                  "rate": "1310.95"
                }
              },
              {
                "$": {
                  "currency": "MXN",
                  "rate": "22.3317"
                }
              },
              {
                "$": {
                  "currency": "MYR",
                  "rate": "4.7363"
                }
              },
              {
                "$": {
                  "currency": "NZD",
                  "rate": "1.6884"
                }
              },
              {
                "$": {
                  "currency": "PHP",
                  "rate": "63.690"
                }
              },
              {
                "$": {
                  "currency": "SGD",
                  "rate": "1.6138"
                }
              },
              {
                "$": {
                  "currency": "THB",
                  "rate": "38.280"
                }
              },
              {
                "$": {
                  "currency": "ZAR",
                  "rate": "14.7757"
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
  },
  {
    "$": {
      "currency": "JPY",
      "rate": "131.32"
    }
  },
  {
    "$": {
      "currency": "BGN",
      "rate": "1.9558"
    }
  },
  {
    "$": {
      "currency": "CZK",
      "rate": "25.339"
    }
  },
  {
    "$": {
      "currency": "DKK",
      "rate": "7.4474"
    }
  },
  {
    "$": {
      "currency": "GBP",
      "rate": "0.87295"
    }
  },
  {
    "$": {
      "currency": "HUF",
      "rate": "312.56"
    }
  },
  {
    "$": {
      "currency": "PLN",
      "rate": "4.1983"
    }
  },
  {
    "$": {
      "currency": "RON",
      "rate": "4.6636"
    }
  },
  {
    "$": {
      "currency": "SEK",
      "rate": "10.2983"
    }
  },
  {
    "$": {
      "currency": "CHF",
      "rate": "1.1798"
    }
  },
  {
    "$": {
      "currency": "ISK",
      "rate": "121.30"
    }
  },
  {
    "$": {
      "currency": "NOK",
      "rate": "9.5860"
    }
  },
  {
    "$": {
      "currency": "HRK",
      "rate": "7.4240"
    }
  },
  {
    "$": {
      "currency": "RUB",
      "rate": "70.8270"
    }
  },
  {
    "$": {
      "currency": "TRY",
      "rate": "4.9644"
    }
  },
  {
    "$": {
      "currency": "AUD",
      "rate": "1.5934"
    }
  },
  {
    "$": {
      "currency": "BRL",
      "rate": "4.1111"
    }
  },
  {
    "$": {
      "currency": "CAD",
      "rate": "1.5650"
    }
  },
  {
    "$": {
      "currency": "CNY",
      "rate": "7.7138"
    }
  },
  {
    "$": {
      "currency": "HKD",
      "rate": "9.6014"
    }
  },
  {
    "$": {
      "currency": "IDR",
      "rate": "16850.50"
    }
  },
  {
    "$": {
      "currency": "ILS",
      "rate": "4.3262"
    }
  },
  {
    "$": {
      "currency": "INR",
      "rate": "79.4810"
    }
  },
  {
    "$": {
      "currency": "KRW",
      "rate": "1310.95"
    }
  },
  {
    "$": {
      "currency": "MXN",
      "rate": "22.3317"
    }
  },
  {
    "$": {
      "currency": "MYR",
      "rate": "4.7363"
    }
  },
  {
    "$": {
      "currency": "NZD",
      "rate": "1.6884"
    }
  },
  {
    "$": {
      "currency": "PHP",
      "rate": "63.690"
    }
  },
  {
    "$": {
      "currency": "SGD",
      "rate": "1.6138"
    }
  },
  {
    "$": {
      "currency": "THB",
      "rate": "38.280"
    }
  },
  {
    "$": {
      "currency": "ZAR",
      "rate": "14.7757"
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

it('formatXML', () => {
  
  expect(formattedData).toEqual(formattedData);
});
