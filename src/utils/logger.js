// Simple centralized logger for production-safe error reporting
// - In development, logs full error/stack
// - In production, logs only non-sensitive messages (message + tag) to avoid leaking stacks or secrets

export function error(tag, err) {
  try {
    if (import.meta.env.DEV) {
      console.error(`[${tag}]`, err);
    } else {
      // Avoid printing full stack or sensitive payloads in production
      const message = err && (err.message || String(err)) ? (err.message || String(err)) : 'Unknown error';
      console.error(`[${tag}] ${message}`);
    }
  } catch {
    // swallow logging errors
  }
}

export function warn(tag, msg) {
  try {
    if (import.meta.env.DEV) {
      console.warn(`[${tag}]`, msg);
    }
  } catch {
    // Logging must never interrupt the user flow.
  }
}

export default { error, warn };
