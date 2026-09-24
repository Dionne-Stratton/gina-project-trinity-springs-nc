import logo from '../assets/Transparancy Logo Trinity Springs.png'

export default function Logo({ className = '' }) {
  return (
    <span className={`logo ${className}`.trim()}>
      <img src={logo} alt="Trinity Springs Christian Academy" />
    </span>
  )
}
