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
        <br />
        <a href={`mailto:${organization.email}`}>{organization.email}</a>
      </p>
      <p>
        <a href={organization.facebook} target="_blank" rel="noreferrer">
          Facebook {organization.facebookLabel}
        </a>
        <br />
        <a href={organization.instagram} target="_blank" rel="noreferrer">
          Instagram {organization.instagramLabel}
        </a>
      </p>
    </address>
  )
}
