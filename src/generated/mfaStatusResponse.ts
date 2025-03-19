/**
 * Generated by orval v7.4.1 🍺
 * Do not edit manually.
 * TeaCoder API
 * API for Teacoder educational platform
 * OpenAPI spec version: 1.0.0
 */

export interface MfaStatusResponse {
  /** Indicates if TOTP MFA is enabled for the account */
  totpMfa: boolean;
  /** Indicates if Passkey MFA is enabled for the account */
  passkeyMfa: boolean;
  /** Indicates if recovery codes are active for the account */
  recoveryActive: boolean;
}
