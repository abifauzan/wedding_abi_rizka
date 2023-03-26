import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      intro: "We are very pleased to invite you to our wedding",
      guestinfo: "Invited Guest",
      openInvitation: "Open invitation",
      welcomeText:
        "¡Hola! Together with our families, we invite you to our wedding ceremony and celebration. Our wedding will begin at 8 AM until 1 PM on May 20th 2023 at Masjid Raya Bani Umar, Bintaro, Tangerang Selatan. — A & R",
      ourDrama: `Once upon a time, in a busy city, there were two people, Rizka and
    Abi, who were leading mundane lives. Little did they know that their
    paths were about to cross in the most unexpected way. \n
    Rizka is an employee who works in the same office as Abi. Where their
    office was the first office for both of them. As fate would have it,
    they met through their same close friend, and there where they start
    to explore one each other on social media. \n
    As they know each other, soon they realized that they had an instant
    connection. They loved to music and coffee, and bonded over their
    mutual desire to travel the world. \n
    After that fateful meeting, their love grew stronger with each passing
    day, and soon they knew that they were meant to be together forever.
    \n
    And now, their love story has led them to this moment. Rizka and Abi
    would like to invite you to celebrate their love and witness them
    exchange their vows at their wedding day. Join them as they start the
    next chapter of their lives together filled with love, laughter, and
    adventure.`,
      theVenue: "The Venue",
      weddingVows: "Wedding Vows",
      weddingCelebration: "Wedding Celebration",
      viewLocation: "View Location",
      ourGallery: "Our Gallery",
      introRsvp: "Will you attend to our special day?",
      yourName: "Your Name",
      fullName: "Full Name",
      yourFeedback: "Your Response",
      accept: "Respecfully Accepts",
      not_accept: "Respecfully Declines",
      numberGuest: "Number of guests",
      yourMessage: "Your Message to us",
      happyWedding: "Happy wedding for both of you!!!",
      reply: "Reply",
      happyMessage: "Happy message from our friends",
      cantwait: "We can't wait to see you!",
      followus: "Follow Us",
      menu: {
        welcome: "Welcome",
        ourDrama: "Our Drama",
        bigDay: "The Big Day",
        gallery: "Gallery",
        yourReply: "Your Reply",
      },
    },
  },
  id: {
    translation: {
      intro: "Kepada Bapak/Ibu/Saudara/i",
      guestinfo: "Tamu Undangan",
      openInvitation: "Buka Undangan",
      welcomeText:
        "¡Halo! Bersama keluarga kami, kami mengundang Anda ke upacara pernikahan dan perayaan kami. Pernikahan kami akan dimulai dari jam 8 pagi sampai jam 1 siang pada tanggal 20 Mei 2023 di Masjid Raya Bani Umar, Bintaro, Tangerang Selatan. —A & R",
      ourDrama: `Alkisah, di sebuah kota yang ramai, ada dua orang, Rizka dan Abi, yang menjalani kehidupan duniawi. Sedikit yang mereka tahu bahwa jalan mereka akan bertemu dengan cara yang paling tidak terduga. \n
      Rizka merupakan karyawan yang bekerja di kantor yang sama dengan Abi. Dimana kantor mereka merupakan kantor pertama bagi mereka berdua. Seperti sudah ditakdirkan, mereka bertemu melalui teman dekat mereka yang sama, dan di sanalah mereka mulai menjelajahi satu sama lain di media sosial. \n
      Ketika mereka mengenal satu sama lain, mereka segera menyadari bahwa mereka memiliki koneksi instan. Mereka menyukai musik dan kopi dan terikat pada keinginan bersama mereka untuk berkeliling dunia. \n
      Setelah pertemuan yang menentukan itu, cinta mereka semakin kuat setiap hari, dan segera mereka tahu bahwa mereka ditakdirkan untuk bersama selamanya.\n
      Dan kini, kisah cinta mereka telah membawa mereka ke momen ini. Rizka dan Abi ingin mengundang Anda untuk merayakan cinta mereka dan menyaksikan bagaimana mereka bertukar sumpah di hari pernikahan mereka. Bergabunglah dengan mereka saat mereka memulai babak selanjutnya dalam hidup mereka bersama yang dipenuhi dengan cinta, tawa, dan petualangan.`,
      theVenue: "Lokasi",
      weddingVows: "Akad Pernikahan",
      weddingCelebration: "Resepsi Pernikahan",
      viewLocation: "Lihat Lokasi",
      ourGallery: "Galeri Kami",
      introRsvp: "Apakah Anda akan menghadiri hari istimewa kami?",
      yourName: "Nama Anda",
      fullName: "Nama Lengkap",
      yourFeedback: "Jawaban Anda",
      accept: "Dengan senang hati Datang",
      not_accept: "Dengan Hormat Menolak",
      numberGuest: "Jumlah Tamu Undangan",
      yourMessage: "Pesan Anda untuk kami",
      happyWedding: "Selamat menempuh hidup baru ya kalian!!!",
      reply: "Kirim",
      happyMessage: "Pesan bahagia dari teman-teman kami",
      cantwait: "Sampai berjumpa di acara kami!",
      followus: "Temukan kami di media sosial!",
      menu: {
        welcome: "Selamat Datang",
        ourDrama: "Cerita Kami",
        bigDay: "Hari Pernikahan",
        gallery: "Galeri",
        yourReply: "Response Anda",
      },
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
