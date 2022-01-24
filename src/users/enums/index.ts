export enum InvitationStatus {
  Pending = 'PENDING',
  Sent = 'SENT',
  Accepted = 'ACCEPTED'
}

export enum PackageType {
  Economy = 'ECONOMY_SERIES',
  Entertainment = 'ENTERTAINMENT_SERIES',
  Executive = 'EXECUTIVE_SERIES',
  DeckExtender = 'DECK_EXTENDER_SERIES',
  Walkway = 'WALKWAY_PACKAGES',
  PoolPatio = 'NEW_POOL_PATIO_PACKAGES',
  HardscapeBar = 'HARDSCAPE_BAR',
  HardscapeCouch = 'HARDSCAPE_COUCH',
  HardscapeGrill = 'HARDSCAPE_GRILL',
}

export enum PatioPackageAddition {
  FirePit = 'FIRE_PIT',
  SittingWall = 'SITTING_WALL',
  Pillars = 'PILLARS',
  WallLights = 'WALL_LIGHTS',
  OutdoorSpeakers = 'OUTDOOR_SPEAKERS',
  TimberFrameOrVinylPavilion = 'TIMBER_FRAME_OR_VINYL_PAVILION',
  OutdoorLighting = 'OUTDOOR_LIGHTING',
  LandscapeDesignAndInstallation = 'LANDSCAPE_DESIGN_AND_INSTALLATION',
  GraniteSteps = 'GRANITE_STEPS',
  SideRetainingWalls = 'SIDE_RETAINING_WALLS',
  Curbing = 'CURBING',
  PoolCoping = 'POOL_COPING',
}

export enum HardscapingPropertyType {
  Residential = 'RESIDENTIAL',
  Commercial = 'COMMERCIAL',
  Municipality = 'MUNICIPALITY',
}

export enum ContractorStatus {
  InvitationSent = 'INVITATION_SENT',
  UserCreated = 'CREATED',
  BasicProfileApproved = 'BASIC_PROFILE_APPROVED',
  QualityCheckPassed = 'QUALITY_CHECK_PASSED',
  ReputationCheckPassed = 'REPUTATION_CHECK_PASSED',
  SignedLegalTerms = 'SIGNED_LEGAL_TERMS',
  PaymentVerified = 'PAYMENT_VERIFIED',
  Rejected = 'REJECTED',
}

export enum ContractorClass {
  A = 'A',
  B = 'B',
}

export enum ExperienceLevel {
  Novice = 'NOVICE',
  Intermediate = 'INTERMEDIATE',
  Advanced = 'ADVANCED',
  Expert = 'EXPERT',
}
