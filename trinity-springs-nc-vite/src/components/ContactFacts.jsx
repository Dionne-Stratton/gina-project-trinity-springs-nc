import { organization } from '../contact'

export default function ContactFacts() {
  return (
    <address className="contact-facts">
      <p>
        {organization.campus}
        <br />
        {organization.street}
        <br />
        {organization.city}
      </p>
      <p>
        {organization.mailingStreet}
        <br />
        {organization.mailingCity}
      </p>
      <p>
        <a href={organization.phoneHref}>{organization.phone}</a>
        <br />
        <a href={`mailto:${organization.applicationEmail}`}>
          {organization.applicationEmail}
        </a>
      </p>
      <p>
        <a href={organization.facebook} target="_blank" rel="noreferrer">
          Facebook {organization.facebookLabel}
        </a>
      </p>
    </address>
  )
}
