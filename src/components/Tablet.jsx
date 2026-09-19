// An iPad-style tablet drawn in CSS: thin even bezel, rounded corners, front camera, power
// button and a home indicator. It sizes to its container (width: 100%), and everything inside
// (children = the screen content) scales with it via container-query units.
export default function Tablet({ children, dark = false }) {
  return (
    <div className="tablet">
      <span className="tablet-camera" aria-hidden="true" />
      <div className={`tablet-screen${dark ? ' tablet-screen-dark' : ''}`}>{children}</div>
    </div>
  );
}
