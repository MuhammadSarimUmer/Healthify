type SpinnerProps = {
  className?: string;
};

/** Small circular loading indicator that inherits the surrounding text colour. */
export default function Spinner({ className = "size-4" }: SpinnerProps) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block animate-spin rounded-full border-2 border-current border-t-transparent ${className}`}
    />
  );
}
