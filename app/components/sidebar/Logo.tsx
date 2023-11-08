interface Props {}
export default function Logo({}: Props) {
  return (
    <>
      <h1 className="text-2xl font-bold text-text-1 dark:text-dark-text-1">Styleguide</h1>
      <p className="text-text-2 dark:text-dark-text-2">
        This is our living styleguide. Use it to understand our design system
        and build consistent user interfaces.
      </p>
    </>
  );
}
