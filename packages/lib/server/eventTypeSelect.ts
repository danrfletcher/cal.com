import { Prisma } from "@calcom/prisma/client";

export const eventTypeSelect = Prisma.validator<Prisma.EventTypeSelect>()({
  id: true,
  teamId: true,
  schedulingType: true,
  userId: true,
  metadata: true,
  description: true,
  hidden: true,
  slug: true,
  length: true,
  title: true,
  requiresConfirmation: true,
  position: true,
  offsetStart: true,
  profileId: true,
  eventName: true,
  parentId: true,
  timeZone: true,
  periodType: true,
  periodStartDate: true,
  periodEndDate: true,
  periodDays: true,
  periodCountCalendarDays: true,
  lockTimeZoneToggleOnBookingPage: true,
  requiresBookerEmailVerification: true,
  disableGuests: true,
  hideCalendarNotes: true,
  minimumBookingNotice: true,
  beforeEventBuffer: true,
  afterEventBuffer: true,
  seatsPerTimeSlot: true,
  onlyShowFirstAvailableSlot: true,
  seatsShowAttendees: true,
  seatsShowAvailabilityCount: true,
  scheduleId: true,
  price: true,
  currency: true,
  slotInterval: true,
  successRedirectUrl: true,
  isInstantEvent: true,
  instantMeetingExpiryTimeOffsetInSeconds: true,
  aiPhoneCallConfig: true,
  assignAllTeamMembers: true,
  rescheduleWithSameRoundRobinHost: true,
  recurringEvent: true,
  locations: true,
  bookingFields: true,
  useEventTypeDestinationCalendarEmail: true,
  secondaryEmailId: true,
  bookingLimits: true,
  durationLimits: true,
  eventTypeColor: true,
});
