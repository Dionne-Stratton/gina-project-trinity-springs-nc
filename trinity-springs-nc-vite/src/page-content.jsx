import { organization } from './contact'
import Link from './components/Link'
import { pageMedia } from './photos'

const calendar = [
  ['8/14', 'Back to School Night / Convocation (evening event)'],
  ['8/18', 'School starts'],
  ['9/7', 'Labor Day — no assignments'],
  ['10/3', 'Fall break begins (10/3–10/11)'],
  ['11/23', 'Thanksgiving break (11/25–11/29)'],
  ['11/26', 'Thanksgiving'],
  ['12/1', 'Christmas break begins'],
  ['12/17', 'Christmas program (evening event)'],
  ['1/12', 'Back to school'],
  ['2/9', 'Pancake Day (mid-day event)'],
  ['2/15', 'Winter break (2/12–2/14)'],
  ['3/22', 'Spring break (3/22–3/29)'],
  ['3/28', 'Easter'],
  ['5/20', 'Last day of classes (noon dismissal) and End of Year Showcase (evening event)'],
]

function Photo({ image, className }) {
  if (!image) return null
  return (
    <figure className={className}>
      <img src={image.src} alt={image.alt} />
    </figure>
  )
}

function HomeBody() {
  const stages = pageMedia['/program/grammar-logic-rhetoric'].stages
  const grades = [
    'Kindergarten through 6th grade. Annual tuition for 2026–2027 is $2,200.',
    '7th through 8th grade. Annual tuition for 2026–2027 is $2,600.',
    '9th through 12th grade. Annual tuition for 2026–2027 is $2,800.',
  ]

  return (
    <div className="prose">
      <h2>Mission</h2>
      <p>
        To bring glory to God through helping homeschool families develop the faith,
        character, and intellect of their children through Christ-centered classical
        instruction.
      </p>
      <h2>Vision</h2>
      <p>To make homeschooling accessible to families in our community.</p>
      <h2>A homeschool hybrid program</h2>
      <p>
        Trinity Springs Christian Academy is not a school, but a homeschool hybrid
        program. Trinity Springs provides classroom instruction on community days, and
        parents commit time and effort as facilitators and instructors on at-home days.
        Each family operates its own homeschool under the laws of the NC Department of
        Non-Public Education and is the ultimate authority in the children’s education.
      </p>
      <p>
        <Link to="/program/hybrid-model">How the partnership works</Link>
      </p>
      <h2>Grammar, Logic, and Rhetoric</h2>
      <div className="photo-row">
        {stages.map((stage, index) => (
          <figure key={stage.label}>
            <img src={stage.src} alt={stage.alt} />
            <figcaption>{stage.label}</figcaption>
            <p>{grades[index]}</p>
          </figure>
        ))}
      </div>
      <p>
        <Link to="/program/grammar-logic-rhetoric">The three programs</Link>
        {' · '}
        <Link to="/admissions/tuition">Tuition and fees</Link>
      </p>
      <h2>Enrollment</h2>
      <ol>
        <li>Campus tour and family interview</li>
        <li>Submit the family application</li>
        <li>Acceptance and enrollment</li>
      </ol>
      <p>
        <Link to="/admissions/process">Read the enrollment steps</Link>
        {' · '}
        <Link to="/contact">Schedule a tour</Link>
      </p>
    </div>
  )
}

function AboutBody() {
  return (
    <>
      <p>
        Trinity Springs Christian Academy was established in 2023. It is a
        Christ-centered classical homeschool hybrid program and a 501(c)(3) nonprofit.
      </p>
      <p>
        Its mission is to bring glory to God through helping homeschool families
        develop the faith, character, and intellect of their children through
        Christ-centered classical instruction. Its vision is to make homeschooling
        accessible to families in our community.
      </p>
    </>
  )
}

function MissionBody() {
  return (
    <>
      <p className="epigraph">
        “We will not hide them from their children, but tell to the coming generation
        the glorious deeds of the Lord, and His might, and the wonders that He has
        done.” — Psalm 78:4
      </p>
      <h2>Mission</h2>
      <p>
        To bring glory to God through helping homeschool families develop the faith,
        character, and intellect of their children through Christ-centered classical
        instruction.
      </p>
      <h2>Vision</h2>
      <p>To make homeschooling accessible to families in our community.</p>
    </>
  )
}

function FaithBody() {
  return (
    <>
      <p>
        Trinity Springs is a non-denominational community. The statement of faith
        reflects only the fundamental beliefs of Christianity, because Trinity Springs
        is not a church and is ecumenical. For theology beyond what is reflected here,
        students are directed to the authority of their parents and their churches.
      </p>
      <p>
        Trinity Springs is unapologetic in its belief in a loving, moral, and just God
        and His place in history and our lives. The desire is to introduce students to
        the Creator and the Savior, but the relationship must be theirs.
      </p>
      <ul>
        <li>We believe the Bible is the inspired, infallible Word of God.</li>
        <li>
          We believe there is only one God, eternally existent in three Persons:
          Father, Son, and Holy Spirit.
        </li>
        <li>
          We believe Jesus was fully God and fully man. He died and rose physically for
          the redemption of all who will believe.
        </li>
        <li>We believe Jesus is the only Way and Provision for redemption.</li>
        <li>
          We believe God, the Creator, is a loving and compassionate God who hears
          prayer, speaks through His Holy Spirit, and intervenes for His people
          throughout history and still today.
        </li>
        <li>
          We believe the God of the Bible created the Earth and that humans, who are
          body, soul, and spirit, are made in His image.
        </li>
        <li>
          We believe that our sexual identity as male or female is inscribed in us by
          God and the marital union of male and female is a fundamental dimension of
          being made in the image of God.
        </li>
        <li>
          We believe in the spiritual unity of all believers in our Lord Jesus Christ.
        </li>
        <li>
          Eternal life is a free gift that is received through faith in Jesus alone.
          Eternal life is neither deserved by anyone, nor can it be earned by good
          deeds.
        </li>
      </ul>
    </>
  )
}

function LeadershipBody() {
  return (
    <>
      <p>TSCA is a 501(c)(3) nonprofit.</p>
      <ul>
        <li>Christ is the first and highest authority. (Isaiah 45:18)</li>
        <li>
          Board of Directors: 3–5 board members who love the Lord and safeguard the
          vision of the organization.
        </li>
        <li>
          Admin team: 3 administrators with equal responsibility and authority.
          (Ecclesiastes 4:12)
        </li>
        <li>
          Leadership team: up to 7 leaders with equal influence. This team includes the
          administrators.
        </li>
        <li>
          Trinity Springs Christian Academy community: the faculty, staff, and families
          of Trinity Springs, to whom all TSCA community leadership is accountable.
        </li>
      </ul>
    </>
  )
}

function ProgramBody() {
  return (
    <>
      <p>
        Parents are a child’s lifetime teachers and are commissioned by God to train
        them in mind, body, and spirit. Academic pursuits are valuable, and a child’s
        everyday life experiences are some of their richest educational opportunities.
      </p>
      <p>
        Trinity Springs provides classroom instruction on community days. Parents
        commit time and effort as facilitators and instructors on at-home days. Parents
        encourage, supervise, and motivate their students. Instructors and parents
        work together and communicate about the students’ work and progress, with the
        hope of providing high-quality academics and fostering the love of learning.
      </p>
    </>
  )
}

function HybridBody() {
  return (
    <>
      <p>
        It is important to understand that Trinity Springs Christian Academy is not a
        school, but a homeschool hybrid program. Each family operates its own
        homeschool under the laws established by the NC Department of Non-Public
        Education and is solely responsible for the maintenance of that homeschool.
        Each family is the ultimate authority in their children’s education.
        Homeschooling parents and guardians are responsible for the schooling of their
        children and for ensuring that their educational needs are met. Each family
        must maintain its own official records. TSCA cannot do this for families, but
        may be able to assist, or direct a family to assistance, if that is needed.
      </p>
      <p>
        <a href={organization.dnpe} target="_blank" rel="noreferrer">
          North Carolina Department of Non-Public Education
        </a>
      </p>
      <p>
        K/1st–3rd/4th subjects will be primarily taught by a homeroom teacher, with a
        few exceptions.
      </p>
    </>
  )
}

function ClassicalBody() {
  return (
    <p>
      The mission of Trinity Springs is to bring glory to God through helping
      homeschool families develop the faith, character, and intellect of their
      children through Christ-centered classical instruction. The 2026–2027 tuition
      schedule names three programs: Grammar School for kindergarten through 6th
      grade, the School of Logic for 7th through 8th grade, and the School of
      Rhetoric for 9th through 12th grade.
    </p>
  )
}

function StagesBody({ media }) {
  const details = [
    'Grammar School serves kindergarten through 6th grade. Annual tuition for 2026–2027 is $2,200.',
    'The School of Logic serves 7th through 8th grade. Annual tuition for 2026–2027 is $2,600.',
    'The School of Rhetoric serves 9th through 12th grade. Annual tuition for 2026–2027 is $2,800.',
  ]

  return (
    <>
      <p>
        These are the three programs named in the 2026–2027 tuition schedule.
        K/1st–3rd/4th subjects will be primarily taught by a homeroom teacher, with a
        few exceptions.
      </p>
      <div className="photo-row">
        {media.stages.map((stage, index) => (
          <figure key={stage.label}>
            <img src={stage.src} alt={stage.alt} />
            <figcaption>{stage.label}</figcaption>
            <p>{details[index]}</p>
          </figure>
        ))}
      </div>
    </>
  )
}

function AdmissionsBody() {
  return (
    <>
      <p>
        The campus tour and family interview are the first step. Prospective families
        then submit an application, and accepted families receive an enrollment packet.
      </p>
      <p>
        If finances are a concern, families are invited to reach out. Trinity Springs
        will do its best to accommodate them.
      </p>
    </>
  )
}

function ProcessBody() {
  return (
    <>
      <h2>1. Campus tour and family interview</h2>
      <p>
        The tour and interview are vital in the decision for prospective families. This
        is an opportunity for parents to see how their students interact with the
        people and environment of the community. The family interview is a natural but
        focused conversation, conducted during the tour, between a member of the
        administration, parents, and their children. It is an opportunity to get to
        know Trinity Springs and have questions answered, and to feel confident that
        Trinity Springs Christian Academy is the best fit for the family.
      </p>
      <h2>2. Submit the application</h2>
      <p>
        The next step is to submit the family application. The application is reviewed
        by the admissions committee. Applications may be emailed to{' '}
        <a href={`mailto:${organization.applicationEmail}`}>
          {organization.applicationEmail}
        </a>
        .
      </p>
      <h2>3. Acceptance and enrollment</h2>
      <p>
        Once a child is accepted for enrollment, the family receives an enrollment
        packet, including the necessary forms and agreements, as well as resources for
        the start of the school year.
      </p>
      <p>
        Families who are interested in teaching can say so on the family interest form,
        and Trinity Springs will contact them with more information. The form also
        asks families to indicate whether they are ready to apply or would like to stay
        connected.
      </p>
    </>
  )
}

function TuitionBody() {
  return (
    <>
      <table>
        <caption>2026–2027 tuition</caption>
        <thead>
          <tr>
            <th>Program</th>
            <th>Annual tuition</th>
            <th>Monthly plan, 10 payments, August–May</th>
            <th>Semester plan, August and January</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Grammar School, kindergarten–6th grade</td>
            <td>$2,200</td>
            <td>$220</td>
            <td>$1,100</td>
          </tr>
          <tr>
            <td>School of Logic, 7th–8th grade</td>
            <td>$2,600</td>
            <td>$260</td>
            <td>$1,300</td>
          </tr>
          <tr>
            <td>School of Rhetoric, 9th–12th grade</td>
            <td>$2,800</td>
            <td>$280</td>
            <td>$1,400</td>
          </tr>
        </tbody>
      </table>
      <h2>Family tuition discounts</h2>
      <p>For families with more than one child, sibling discounts are applied in descending order by grade:</p>
      <ul>
        <li>Second child: 10%</li>
        <li>Third child and beyond: 15%</li>
      </ul>
      <h2>Teaching discounts</h2>
      <p>
        Teacher and assistant teacher discounts are available. Each arrangement is
        unique, so families should contact Trinity Springs for details.
      </p>
      <p>
        If finances are a concern, families are invited to reach out. Trinity Springs
        will do its best to accommodate them.
      </p>
      <h2>Fees</h2>
      <p>All fees are non-refundable and are not eligible for a discount.</p>
      <ul>
        <li>Application and assessment fee: $25 per student</li>
        <li>Registration fee: $150 per family</li>
        <li>
          Supply fee: $25 per family per semester, for consumable supplies and paper
          products
        </li>
        <li>
          Lab fees: $50–$100 per student, as applicable for upper-grade lab science
          classes
        </li>
      </ul>
      <h2>Books and materials</h2>
      <p>
        Books and materials are not included in the tuition and fees and need to be
        purchased separately. A list of required books, including textbook titles and
        ISBNs, is provided for each grade and class so families may purchase them from
        the vendor of their choice.
      </p>
    </>
  )
}

function CommunityBody() {
  return (
    <>
      <p>
        TSCA is an educational partnership between each family and the community.
        Serving within the community fosters belonging and camaraderie and makes the
        programming possible. Service teams also help keep tuition and fees low.
        Families are required to contribute a minimum of 15 hours of service within the
        TSCA community during the 10-month academic year. Families experiencing
        exceptional circumstances may apply for an exception with administration.
      </p>
      <h2>Campus stewardship</h2>
      <ul>
        <li>
          Facility Care Team: leaves the areas used by the community in the condition
          they were found, or better, and verifies that students completed their
          cleaning tasks. Areas include hallways, bathrooms, the assembly room, and
          other common areas. Lunch clean-up and classroom clean-up are not part of
          this team’s responsibilities.
        </li>
        <li>
          Teacher substitutes: parents available if a teacher is ill or otherwise unable
          to work, sometimes on short notice. TSCA makes every effort to provide lesson
          plans and materials. Substitutes are also built into the staff this year.
        </li>
        <li>
          Reading helpers: assist during periodic phonics assessments, help the youngest
          readers practice, or read to students during literature and story time.
        </li>
      </ul>
      <h2>Community building</h2>
      <ul>
        <li>
          Photo Team: take or collect photos through the year, and possibly create a
          slideshow for the end-of-year program, take class photos, and create a memory
          book or yearbook for families to purchase. Some faculty are needed.
        </li>
        <li>
          Meal Train organizer: creates and manages a meal train for families in the
          case of a life event, such as a new baby, surgery, or illness.
        </li>
        <li>
          Activities and Fundraising Planning Team: coordinates community field trips,
          activities, special events, and fundraisers, communicates with families, and
          coordinates sign-ups and RSVPs.
        </li>
        <li>
          Special Events Team: a sub-team that sets up, runs, and breaks down events
          such as class parties, end-of-semester programs, and field day.
        </li>
        <li>
          Special Lunch Team: comes to campus to set up, serve, and clean up monthly
          special lunches.
        </li>
      </ul>
      <h2>Respect for traditions of the faith</h2>
      <p>
        Trinity Springs is a non-denominational homeschool program and respects the
        right of families to practice their Christian faith in the denomination of
        their choice. A point of doctrine may be introduced or discussed academically,
        but Trinity Springs endeavors not to promote the acceptance or the denial of
        any church doctrine not set forth in the statement of faith. Instructors,
        volunteers, families, members, and other participants are expected to practice
        understanding and respect for the various traditions of the Christian faith.
      </p>
      <h2>Conflict resolution</h2>
      <p>
        In a conflict within the community, those involved are asked to look to the
        example in Matthew 18. Individuals discreetly take a grievance to the person
        involved first. If it cannot be resolved at the individual level, it may be
        brought to administration and/or the leadership team.
      </p>
    </>
  )
}

function FamiliesBody() {
  return (
    <>
      <h2>2026–2027 academic calendar</h2>
      <p>
        The calendar distinguishes school-at-home days, on-campus days, Friday
        activities (dates tentative), parent-teacher conferences, special days, the
        first and last day of a semester, breaks, and holidays with no lesson plans.
      </p>
      <table>
        <caption>Dated events from the 2026–2027 academic calendar</caption>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {calendar.map(([date, description]) => (
            <tr key={date}>
              <td>{date}</td>
              <td>{description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Food and drink on campus</h2>
      <ul>
        <li>
          TSCA is a peanut- and shellfish-free community. Please do not send or bring
          food with tree nuts, peanuts, or shellfish to campus or to any community
          event or activity.
        </li>
        <li>
          Students in kindergarten through 6th grade should pack ready-to-eat lunches
          that do not require assistance or heating.
        </li>
        <li>
          Only students in 7th grade and above have access to microwaves at lunchtime.
          This is a privilege of middle and high school students.
        </li>
        <li>
          Lunchtime drinks may include water or juice. Please do not send sugary drinks
          or sodas. If a student brings them, they will be asked to save them for after
          dismissal.
        </li>
        <li>
          Students should have non-messy snacks and water for classroom snack times.
          Nothing but clear, colorless water is permitted in the classrooms during class
          time, for all students in kindergarten through 12th grade.
        </li>
      </ul>
      <p>The full food policy may be viewed in Class Reach.</p>
      <h2>Uniforms</h2>
      <p>
        The uniform policy is intended to keep the focus on learning and away from
        clothing distractions. Choices have been made with modesty, comfort, and budget
        in mind. Students are expected to arrive for classes each community day in clean
        and intact uniform attire. There are occasional dress-down days.
      </p>
      <h3>Girls</h3>
      <ul>
        <li>
          Collared polo-style shirts. Classic and Peter Pan collars are acceptable.
          Colors: navy, light blue, gray, and yellow.
        </li>
        <li>Oxford shirts and Peter Pan collar blouses in white or light blue.</li>
        <li>Sweaters in any style, in navy blue or heather gray.</li>
        <li>Solid navy blazers are optional for upper grade.</li>
        <li>
          Lands’ End Classic Navy plaid, French Toast Blue Gold plaid, or a solid navy
          or gray skirt or skort, no higher than the top of the knee.
        </li>
        <li>
          White, navy, gray, or black knee-high or crew socks with skirts and skorts.
          Tights in these colors are also acceptable.
        </li>
        <li>
          Lower-grade girls may wear a Classic Navy plaid jumper or a solid navy polo
          dress.
        </li>
        <li>Chino or jogger-style pants in navy or gray.</li>
        <li>
          Neutral-colored sneakers or Mary Jane dress shoes. No flip-flops, open-toe, or
          open-back shoes.
        </li>
      </ul>
      <h3>Boys</h3>
      <ul>
        <li>
          Collared polo-style shirts in navy, light blue, gray, or yellow.
        </li>
        <li>
          Oxford shirts in white or light blue, with an optional Classic Navy plaid tie.
        </li>
        <li>Sweaters in any style, in heather gray or navy.</li>
        <li>Solid navy blazers are optional for upper grade.</li>
        <li>Chino or jogger-style pants in navy or gray.</li>
        <li>Shorts in navy or gray, no more than 3 inches above the knee.</li>
        <li>White, navy, gray, or black crew socks.</li>
        <li>
          Neutral-colored sneakers or dress shoes. No flip-flops, open-toe, or open-back
          shoes.
        </li>
      </ul>
      <p>
        Lands’ End is the preferred vendor, particularly for plaid items. The Lands’ End
        Classic Navy plaid is the official plaid. French Toast Blue Gold plaid is also
        acceptable. Items in the accepted colors and styles may be purchased from
        another retailer. At least one uniform top must be embroidered with the TSCA
        logo, either through Lands’ End or at a local shop. The preferred school number
        is {organization.landsEndNumber}. Search for “Trinity Springs Christian Academy.”
      </p>
      <p>
        <a href={organization.landsEnd} target="_blank" rel="noreferrer">
          Lands’ End school uniforms
        </a>
      </p>
      <h2>Absences and illness</h2>
      <p>
        For a short-term absence, text {organization.phone} — and the homeroom teacher,
        if possible — the evening before or the morning of the missed community day. For
        a long-term absence, such as a planned vacation while classes are in session,
        notify the admin team and the homeroom teacher as far in advance as possible.
      </p>
      <ul>
        <li>
          A child, faculty member, or staff member should not attend community activities
          with a fever, diarrhea, or vomiting, or with a cough, sore throat, sneezing, or
          runny nose that prevents participation and requires extra care.
        </li>
        <li>
          Someone with a fever or who is vomiting will be excused from class, as will
          someone with a stomach bug and diarrhea or other symptoms that prevent
          participation.
        </li>
        <li>
          Return after being fever-free and/or without vomiting for 24 hours, and free of
          other stomach-bug symptoms.
        </li>
        <li>
          Faculty, staff, and guardians may ask administration when they are uncertain
          what to do.
        </li>
        <li>
          Someone who becomes ill on campus may tell a teacher or administrator.
          Arrangements will be made for them to go home. If someone vomits, a teacher or
          administrator must be informed as soon as possible so the area can be
          disinfected.
        </li>
      </ul>
      <h2>Code of conduct</h2>
      <p>
        The code of conduct is meant to provide an atmosphere where students, teachers,
        parents, and the facility are treated with respect and integrity, and where
        students can learn and thrive. It applies on campus and at other TSCA events.
        Failure to comply will result in appropriate consequences and could result in
        removal from the program, depending on the severity or frequency of the incident.
      </p>
      <h3>Respect for authority</h3>
      <ul>
        <li>
          Listen when the teacher is speaking. Do not take part in negative, distracting,
          or disruptive talking or behavior. Be respectful and attentive during Morning
          Prayers in the chapel.
        </li>
        <li>Do not be intentionally disrespectful or insubordinate to teachers or other adults.</li>
        <li>Follow the directions of any teacher, assistant, activity leader, or other adult helper.</li>
        <li>Arrive on time, be prepared to participate, and complete assignments on time.</li>
        <li>Do not leave the classroom without adult permission.</li>
        <li>
          Students in 6th grade and below do not leave the building without an adult
          chaperone. Students in 7th grade and up ask an adult first and do not leave
          without a partner. No student travels between buildings alone.
        </li>
        <li>Remain in designated study hall areas when not in class.</li>
        <li>
          Play in the Fellowship Hall, on the playground, or in other designated play
          areas only at scheduled times or with permission, and only with adult
          supervision.
        </li>
      </ul>
      <h3>Respect for others</h3>
      <ul>
        <li>Speak courteously to adults and other students.</li>
        <li>Show appreciation for the work of other students, teachers, and adults.</li>
        <li>
          Keep phones and other electronic devices put away during class unless they are
          needed for an assignment or a teacher gives permission. The same applies to toys
          or other items that may distract students or teachers.
        </li>
        <li>
          Do not fight, hit, kick, choke, push, or otherwise cause physical harm.
        </li>
        <li>
          Do not bully, and do not use crude, vulgar, divisive, or rude language,
          including swearing and name-calling, spoken or written.
        </li>
      </ul>
      <h3>Respect for property</h3>
      <ul>
        <li>Use only the rooms or areas where classes or activities are being held.</li>
        <li>
          Do not tamper with or damage property belonging to the church, in classrooms or
          elsewhere in the facility.
        </li>
        <li>Treat class property, including chairs and desks, with care.</li>
        <li>
          Do not roam outside the buildings or in areas of the church not designated for
          TSCA use without adult permission and supervision.
        </li>
        <li>
          Clean up personal work areas after each class, and put trash in its proper
          place, including in the bathrooms.
        </li>
        <li>Clean up personal lunchroom space after the meal and before recess.</li>
        <li>Do not deface or damage any property.</li>
        <li>
          Do not eat or drink anything other than water in the classrooms, unless it is
          snack time, a class party, or another time when food is part of a lesson.
        </li>
      </ul>
      <h2>Family links</h2>
      <ul>
        <li>
          <a href={organization.band} target="_blank" rel="noreferrer">
            TSCA Band group for families
          </a>
        </li>
        <li>
          <a href={organization.familiesFacebook} target="_blank" rel="noreferrer">
            TSCA Facebook families page
          </a>
        </li>
        <li>
          <a href={organization.landsEnd} target="_blank" rel="noreferrer">
            Lands’ End, preferred school number {organization.landsEndNumber}
          </a>
        </li>
      </ul>
    </>
  )
}

function ContactBody() {
  return (
    <>
      <p>
        The campus tour and family interview are the first step for a family considering
        enrollment. Applications may be emailed to{' '}
        <a href={`mailto:${organization.applicationEmail}`}>
          {organization.applicationEmail}
        </a>
        .
      </p>
      <p>
        {organization.email} is the TSCA email address. Families
        interested in teaching can note that on the family interest form, and Trinity
        Springs will contact them.
      </p>
    </>
  )
}

export default function PageBody({ path, media }) {
  const wide = media?.wide
  const portrait = media?.portrait
  let copy = null

  switch (path) {
    case '/':
      return <HomeBody />
    case '/about':
      copy = <AboutBody />
      break
    case '/about/mission-vision':
      copy = <MissionBody />
      break
    case '/about/statement-of-faith':
      copy = <FaithBody />
      break
    case '/about/leadership':
      copy = <LeadershipBody />
      break
    case '/program':
      copy = <ProgramBody />
      break
    case '/program/hybrid-model':
      copy = <HybridBody />
      break
    case '/program/classical-education':
      copy = <ClassicalBody />
      break
    case '/program/grammar-logic-rhetoric':
      copy = <StagesBody media={media} />
      break
    case '/admissions':
      copy = <AdmissionsBody />
      break
    case '/admissions/process':
      copy = <ProcessBody />
      break
    case '/admissions/tuition':
      copy = <TuitionBody />
      break
    case '/community':
      copy = <CommunityBody />
      break
    case '/families':
      copy = <FamiliesBody />
      break
    case '/contact':
      copy = <ContactBody />
      break
    default:
      return null
  }

  return (
    <>
      {wide && <Photo image={wide} className="page-photo page-photo-wide" />}
      <div className={portrait ? 'with-photo' : undefined}>
        {portrait && (
          <Photo image={portrait} className="page-photo page-photo-portrait" />
        )}
        <div className="prose">{copy}</div>
      </div>
    </>
  )
}
