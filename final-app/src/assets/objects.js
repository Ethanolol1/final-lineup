import bind_img from '../assets/map_pics/bind.png'
import haven_img from '../assets/map_pics/haven.png'
import split_img from '../assets/map_pics/split.png'
import ascent_img from '../assets/map_pics/ascent.webp'
import breeze_img from '../assets/map_pics/breeze.png'
import lotus_img from '../assets/map_pics/lotus.png'
import sunset_img from '../assets/map_pics/sunset.png'
import viper_lotus_a_ct_img from '../assets/lotus_lineups/viper_lineups/ctlineups.png'
import viper_lotus_a_ct_safer_img from '../assets/lotus_lineups/viper_lineups/ctsaferlineups.png'
import viper_lotus_a_ct_safer_standing_img from '../assets/lotus_lineups/viper_lineups/ctsaferstanding.png'
import viper_lotus_a_ct_standing_img from '../assets/lotus_lineups/viper_lineups/ctstanding.png'
import viper_lotus_a_main_img from '../assets/lotus_lineups/viper_lineups/mainlineups.png'
import viper_lotus_a_main_standing_img from '../assets/lotus_lineups/viper_lineups/mainstanding.png'
import viper_lotus_a_mid_img from '../assets/lotus_lineups/viper_lineups/midlineups.png'
import viper_lotus_a_mid_standing_img from '../assets/lotus_lineups/viper_lineups/midstanding.png'

export const maps = [
  {name: 'Bind', img: bind_img},
  {name: 'Haven', img: haven_img},
  {name: 'Split', img: split_img},
  {name: 'Ascent', img: ascent_img},
  {name: 'Icebox'},
  {name: 'Breeze', img: breeze_img},
  {name: 'Fracture'},
  {name: 'Pearl'},
  {name: 'Lotus', img: lotus_img},
  {name: 'Sunset', img: sunset_img}
]

export const agents = [
  {name: "Brimstone"},
  {name: "Viper"},
  {name: "Killjoy"},
  {name: "Kay/o"},
  {name: "Sova"},
  {name: "Gekko"},
  {name: "Phoenix"}
  // {name: "Brimstone", img: brimstone_img},
  // {name: "Viper", img: viper_img},
  // {name: "Killjoy", img: killjoy_img},
  // {name: "Kay/o", img: kayo_img},
  // {name: "Sova", img: sova_img},
  // {name: "Gekko", img: gekko_img},
  // {name: "Phoenix", img: phoenix_img}
]

export const lotus_viper = [
  {name: "a_ct_standing", img: viper_lotus_a_ct_standing_img},
  {name: "a_ct_safer_standing", img: viper_lotus_a_ct_safer_standing_img},
  {name: "a_ct", img: viper_lotus_a_ct_img},
  {name: "a_ct_safer", img: viper_lotus_a_ct_safer_img},
  {name: "a_main_standing", img: viper_lotus_a_main_standing_img},
  {name: "a_main", img: viper_lotus_a_main_img},
  {name: "a_mid_standing", img: viper_lotus_a_mid_standing_img},
  {name: "a_mid", img: viper_lotus_a_mid_img},
]

export const defaultMap = maps[0]
