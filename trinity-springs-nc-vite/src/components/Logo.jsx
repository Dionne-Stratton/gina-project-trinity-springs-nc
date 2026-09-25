import logo from '../assets/Transparancy Logo Trinity Springs.png'

export default function Logo({ className = '' }) {
  return (
    <span className={`logo-lockup ${className}`.trim()}>
      <span className="logo">
        <img src={logo} alt="" />
      </span>
      <span className="brand-name">
        Trinity Springs
        <span>Christian Academy</span>
      </span>
    </span>
  )
}
