// const flight = {
//   itineraries: [
//     [
//       {
//         dep_date: '2019/8/30 19:00',
//         hash: '88a02ad21e09a989ebd07ee6a3c27663',
//         dir_index: 0,
//         price: {
//           currency: 'KZT',
//           amount: '186 070',
//           price_raw: 186070,
//         },
//         layovers: [
//           4800,
//           0,
//         ],
//         arr_date: '2019/8/30 23:10',
//         allowed_offers: [],
//         carrier_name: 'Scat Airlines',
//         is_meta: false,
//         segments: [
//           {
//             origin: '\u0410\u043B\u043C\u0430\u0442\u044B',
//             airport_dest: '\u0410\u043A\u0442\u0430\u0443',
//             arr_time_iso: '2019-08-30T21:10:00+05:00',
//             dep_terminal: '',
//             dep_time_iso: '2019-08-30T19:00:00+06:00',
//             carrier_name: 'Scat Airlines',
//             stop_locations: [],
//             dest_code: 'SCO',
//             airport_dest_terminal: '',
//             equipment: '733',
//             flight_num: '731',
//             stops: 0,
//             airport_origin: '\u0410\u043B\u043C\u0430-\u0410\u0442\u0430',
//             cabin: 'Economy',
//             dep_time: '30 \u0430\u0432\u0433, \u041F\u0422 19:00',
//             dest: '\u0410\u043A\u0442\u0430\u0443',
//             origin_code: 'ALA',
//             baggage_options: [
//               {
//                 unit: 'KG',
//                 value: 20,
//               },
//             ],
//             arr_time: '30 \u0430\u0432\u0433, \u041F\u0422 21:10',
//             plane: 'Boeing 737-300',
//             services: {
//               full_description: '\u041D\u043E\u0440\u043C\u044B \u043F\u0440\u043E\u0432\u043E\u0437\u0430 \u0431\u0430\u0433\u0430\u0436\u0430 - \u0434\u043E 20 \u043A\u0433',
//               alt_text: '20 \u043A\u0433',
//               code: '20KG',
//               description: '\u041D\u043E\u0440\u043C\u044B \u043F\u0440\u043E\u0432\u043E\u0437\u0430 \u0431\u0430\u0433\u0430\u0436\u0430 - \u0434\u043E 20 \u043A\u0433',
//               title: '\u041D\u043E\u0440\u043C\u044B \u043F\u0440\u043E\u0432\u043E\u0437\u0430 \u0431\u0430\u0433\u0430\u0436\u0430',
//               default: '',
//               solution: '\u041D\u043E\u0440\u043C\u044B \u043F\u0440\u043E\u0432\u043E\u0437\u0430 \u0431\u0430\u0433\u0430\u0436\u0430 - \u0434\u043E 20 \u043A\u0433',
//               value: '20 \u043A\u0433',
//               icon: '',
//             },
//             fare_basis_code: 'EPROWT',
//             airport_origin_terminal: '',
//             arr_terminal: '',
//             carrier: 'DV',
//             fare_seats: 4,
//           },
//           {
//             origin: '\u0410\u043A\u0442\u0430\u0443',
//             airport_dest: '\u0412\u043D\u0443\u043A\u043E\u0432\u043E',
//             arr_time_iso: '2019-08-30T23:10:00+03:00',
//             dep_terminal: '',
//             dep_time_iso: '2019-08-30T22:30:00+05:00',
//             carrier_name: 'Scat Airlines',
//             stop_locations: [],
//             dest_code: 'VKO',
//             airport_dest_terminal: '0',
//             equipment: '735',
//             flight_num: '805',
//             stops: 0,
//             airport_origin: '\u0410\u043A\u0442\u0430\u0443',
//             cabin: 'Economy',
//             dep_time: '30 \u0430\u0432\u0433, \u041F\u0422 22:30',
//             dest: '\u041C\u043E\u0441\u043A\u0432\u0430',
//             origin_code: 'SCO',
//             baggage_options: [
//               {
//                 unit: 'KG',
//                 value: 20,
//               },
//             ],
//             arr_time: '30 \u0430\u0432\u0433, \u041F\u0422 23:10',
//             plane: 'Boeing 737-500',
//             services: {
//               full_description: '\u041D\u043E\u0440\u043C\u044B \u043F\u0440\u043E\u0432\u043E\u0437\u0430 \u0431\u0430\u0433\u0430\u0436\u0430 - \u0434\u043E 20 \u043A\u0433',
//               alt_text: '20 \u043A\u0433',
//               code: '20KG',
//               description: '\u041D\u043E\u0440\u043C\u044B \u043F\u0440\u043E\u0432\u043E\u0437\u0430 \u0431\u0430\u0433\u0430\u0436\u0430 - \u0434\u043E 20 \u043A\u0433',
//               title: '\u041D\u043E\u0440\u043C\u044B \u043F\u0440\u043E\u0432\u043E\u0437\u0430 \u0431\u0430\u0433\u0430\u0436\u0430',
//               default: '',
//               solution: '\u041D\u043E\u0440\u043C\u044B \u043F\u0440\u043E\u0432\u043E\u0437\u0430 \u0431\u0430\u0433\u0430\u0436\u0430 - \u0434\u043E 20 \u043A\u0433',
//               value: '20 \u043A\u0433',
//               icon: '',
//             },
//             fare_basis_code: 'EPROWT',
//             airport_origin_terminal: '',
//             arr_terminal: '0',
//             carrier: 'DV',
//             fare_seats: 4,
//           },
//         ],
//         stops: 1,
//         carrier: 'DV',
//         refundable: false,
//         traveltime: 25800.0,
//       },
//     ],
//   ],
//   price_details: {
//     base_raw: 150329,
//     modifiers: '-300',
//     modifiers_raw: -300,
//     taxes: '36 041',
//     base: '150 329',
//     taxes_raw: 36041,
//   },
//   price: '186 070',
//   currency: 'KZT',
//   bonus_usage: false,
//   services: {
//     '20KG': {
//       full_description: '\u041D\u043E\u0440\u043C\u044B \u043F\u0440\u043E\u0432\u043E\u0437\u0430 \u0431\u0430\u0433\u0430\u0436\u0430 - \u0434\u043E 20 \u043A\u0433',
//       alt_text: '20 \u043A\u0433',
//       code: '20KG',
//       description: '\u041D\u043E\u0440\u043C\u044B \u043F\u0440\u043E\u0432\u043E\u0437\u0430 \u0431\u0430\u0433\u0430\u0436\u0430 - \u0434\u043E 20 \u043A\u0433',
//       title: '\u041D\u043E\u0440\u043C\u044B \u043F\u0440\u043E\u0432\u043E\u0437\u0430 \u0431\u0430\u0433\u0430\u0436\u0430',
//       default: '',
//       solution: '\u041D\u043E\u0440\u043C\u044B \u043F\u0440\u043E\u0432\u043E\u0437\u0430 \u0431\u0430\u0433\u0430\u0436\u0430 - \u0434\u043E 20 \u043A\u0433',
//       value: '20 \u043A\u0433',
//       icon: '',
//     },
//   },
//   price_raw: 186070,
//   validating_carrier: 'DV',
//   id: 'c42514a5-ef55-4fac-8a5b-e5952d30e025',
//   has_meta: false,
//   has_offers: false,
//   best_time: 25800.0,
//   bonus_accrual: false,
//   bonus_accrual_details: null,
//   bonus_usage_details: null,
//   provider: '1P',
//   refundable: false,
//   provider_class: 'AD',
// }

export interface FlightService {
  full_description: string
  alt_text: string
  code: string
  description: string
  title: string
  default: string
  solution: string
  value: string
  icon: string
}

export interface BaggageOption {
  unit: string
  value: number
}

export interface FlightSegment {
  origin: string
  airport_dest: string
  dep_time_iso: string
  carrier_name: string
  stop_locations: any[]
  dest_code: string
  airport_dest_terminal: string
  equipment: string
  flight_num: string
  stops: number
  airport_origin: string
  cabin: string
  dep_time: string
  dest: string
  origin_code: string
  baggage_options: BaggageOption[]
  arr_time: string
  plane: string
  services: FlightService
  fare_basis_code: string
  airport_origin_terminal: string
  arr_terminal: string
  carrier: string
  fare_seats: number
}

export interface FlightItineraries {
  dep_date: string
  arr_date: string
  hash: string
  dir_index: number
  price: {
    currency: string
    amount: number
    price_raw: number
  }
  layovers: number[]
  allowed_offers: string[]
  carrier_name: string
  is_meta: boolean
  segments: FlightSegment[]
  stops: number
  carrier: string
  refundable: boolean
  traveltime: number
}

export interface Flight {
  id: string
  itineraries: FlightItineraries[][]
  price: string
  price_raw: number
  currency: string
  price_details: {
    base: string
    base_raw: number

    modifiers: string
    modifiers_raw: number

    taxes: string
    taxes_raw: number
  }
  validating_carrier: string
  provider: string
  provider_class: string
  refundable: boolean
  has_meta: boolean
  has_offers: boolean
  best_time: number
  bonus_accrual: boolean
  bonus_accrual_details: null
  bonus_usage: boolean
  bonus_usage_details: null
  services: {
    [key: string]: FlightService
  }
}

