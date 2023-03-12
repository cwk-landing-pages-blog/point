import location from '@/assets/icons/location.png';
import mail from '@/assets/icons/mail.png';
import callUs from '@/assets/icons/call-us.png';

export const pointFood = {
  title:'Point Food & Coffee',
  keywords:['food','fast','halal','pizza'],
  startedOn:'15/11/2017',
  addressUrl:'https://goo.gl/maps/X29eGYiTjQ4YFwVo7',
  tel:[
    {primary: '+355693931019'},
    {secondary: '+355693931018'},
  ],
  address: {
    street:"25 Nentori, Lagja Sul Papri 134 ",
    city:' Elbasan ',
    country:' Albania ',
    postCode:' 3001 '
  },
  website:'',
  linktree:'',
  socials:{
    facebook:{
      key:'facebook',
      name:'Facebook',
      icon: 'facebook',
      link:'https://www.facebook.com/pointfoodelbasan'
    },
    instagram:{
      key:'instagram',
      name:'Instagram',
      icon: 'instagram',
      link:''
    },
    tikTok:{
      key:'tik-tok',
      name:'Tik-Tok',
      icon:'tik-tok',
      link:''
    },
    email:{
      key:'email',
      name:'Email',
      icon: mail,
      link:'pointdimensionless@gmail.com'
    },
    twitter:{
      key:'twitter',
      name:'Twitter',
      icon:'twitter',
      link:''
    },
    linkedin:{
      key:"linkedin",
      name:'Linkedin',
      icon:'linkedin',
      url:''
    },
    maps:{
      key:'google-maps',
      name:"Google Maps",
      icon: location,
      link:"https://goo.gl/maps/X29eGYiTjQ4YFwVo7"
    },
    tel:{
      key:'tel',
      name: '+3550693931018 or +3550693931019',
      icon: callUs,
      link: "tel:+3550693931019"
    }
  }
}