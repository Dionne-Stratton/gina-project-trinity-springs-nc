import classroomTable from './assets/818597816_1555205939224935_1524415522943999201_n.jpg'
import handwriting from './assets/818611448_1094038653014789_889285802551922317_n.jpg'
import handsOnScience from './assets/818729203_2291075288959281_5130815639976803485_n.jpg'
import microscopeStudents from './assets/819523481_1817661489646775_4723661352457888863_n.jpg'
import microscopeClass from './assets/820220955_28350693147929674_3851976585017074715_n.jpg'
import drawingWithTeacher from './assets/820307473_1394049746225606_4446885422905114871_n.jpg'
import smilingClass from './assets/820430374_2379092629163151_7900138597264163012_n.jpg'
import historyStudy from './assets/821122672_1080796731596888_4367899446024982362_n.jpg'
import smilingStudent from './assets/821264282_1351903953443559_5677763745483897309_n.jpg'
import teacherMicroscope from './assets/821404083_1401974115375910_6987429257086497128_n.jpg'
import classroomWide from './assets/821478008_1676740604079515_3830696394146763961_n.jpg'
import kindergarten from './assets/824944980_980737055060256_3716327741319941158_n.jpg'
import smallGroup from './assets/825237782_1564408321606583_6801364599214242274_n.jpg'

export const pageMedia = {
  '/': {
    hero: {
      src: classroomTable,
      alt: 'Students and a teacher working together at a classroom table',
    },
  },
  '/about': {
    wide: {
      src: classroomWide,
      alt: 'A classroom with students at their desks and teachers nearby',
    },
  },
  '/about/mission-vision': {
    portrait: {
      src: smilingClass,
      alt: 'A teacher and students smiling around a classroom table',
    },
  },
  '/program': {
    portrait: {
      src: handsOnScience,
      alt: 'A student working on a hands-on science activity',
    },
  },
  '/program/hybrid-model': {
    portrait: {
      src: smallGroup,
      alt: 'An adult working with young students at a table',
    },
  },
  '/program/classical-education': {
    portrait: {
      src: historyStudy,
      alt: 'A student reading and writing beside an open history book',
    },
  },
  '/program/grammar-logic-rhetoric': {
    stages: [
      {
        label: 'Grammar',
        src: kindergarten,
        alt: 'A kindergarten class gathered at a table with their teacher',
      },
      {
        label: 'Logic',
        src: microscopeStudents,
        alt: 'Older students looking through microscopes',
      },
      {
        label: 'Rhetoric',
        src: microscopeClass,
        alt: 'Students examining slides under microscopes',
      },
    ],
  },
  '/admissions': {
    portrait: {
      src: teacherMicroscope,
      alt: 'A teacher helping students use a microscope',
    },
  },
  '/admissions/process': {
    portrait: {
      src: drawingWithTeacher,
      alt: 'A teacher sitting with two students as they draw',
    },
  },
  '/community': {
    portrait: {
      src: smilingStudent,
      alt: 'A student smiling during a classroom activity',
    },
  },
  '/families': {
    portrait: {
      src: handwriting,
      alt: 'A student practicing handwriting',
    },
  },
}
