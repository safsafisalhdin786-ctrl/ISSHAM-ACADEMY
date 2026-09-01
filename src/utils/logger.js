// Simple centralized logger for production-safe error reporting
// - In development, logs full error/stack
// - In production, logs only non-sensitive messages (message + tag) to avoid leaking stacks or secrets

export function error(tag, err) {
  try {
    if (process.env.NODE_ENV !== 'production') {
      console.error(`[${tag}]`, err);
    } else {
      // Avoid printing full stack or sensitive payloads in production
      const message = err && (err.message || String(err)) ? (err.message || String(err)) : 'Unknown error';
      console.error(`[${tag}] ${message}`);
    }
  } catch (e) {
    // swallow logging errors
  }
}

export function warn(tag, msg) {
  try {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`[${tag}]`, msg);
    }
  } catch (e) {}
}

export default { error, warn };
