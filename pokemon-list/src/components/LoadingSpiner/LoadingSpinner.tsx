import { spinner, spinnerContainer } from './LoadingSpinner.styles.css.ts';

export default function LoadingSpinner() {
  return (
    <div className={spinnerContainer}>
      <div className={spinner}></div>
    </div>
  );
}
