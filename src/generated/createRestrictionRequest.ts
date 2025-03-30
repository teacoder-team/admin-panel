/**
 * Generated by orval v7.4.1 🍺
 * Do not edit manually.
 * TeaCoder API
 * API for Teacoder educational platform
 * OpenAPI spec version: 1.0.0
 */
import type { CreateRestrictionRequestReason } from './createRestrictionRequestReason';

export interface CreateRestrictionRequest {
  /** Reason for banning the user */
  reason: CreateRestrictionRequestReason;
  /** Date until the ban is active. If not provided, the ban is indefinite */
  until?: string;
  /** ID of the user to be banned */
  userId: string;
}
