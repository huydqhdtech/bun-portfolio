export default function KokoMascot({ size = '180px' }) {
  return (
    <img
      src="/images/koko.png"
      alt="Koko Mascot"
      className="koko-mascot"
      style={{ width: size, height: size }}
    />
  )
}
