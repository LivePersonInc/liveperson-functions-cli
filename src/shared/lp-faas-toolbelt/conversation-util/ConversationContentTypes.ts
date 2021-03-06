/**
 * Possible content types for conversations.
 * For more information check: https://developers.liveperson.com/messaging-interactions-api-methods-get-conversation-by-conversation-id.html
 */
 export enum ConversationContentTypes {
    INFO = 'info',
    SDES = 'sdes',
    UNAUTH_SDES = 'unAuthSdes',
    CAMPAIGN = 'campaign',
    MESSAGE_RECORDS = 'messageRecords',
    AGENT_PARTICIPANTS = 'agentParticipants',
    AGENT_PARTICIPANTS_ACTIVE = 'agentParticipantsActive',
    CONSUMER_PARTICIPANTS = 'consumerParticipants',
    TRANSFERS = 'transfers',
    INTERACTIONS = 'interactions',
    MESSAGE_SCORES = 'messageScores',
    MESSAGE_STATUSES = 'messageStatuses',
    SKILL_CHANGES = 'skillChanges',
    CONVERSATION_SURVEYS = 'conversationSurveys',
    AGENT_PARTICIPANTS_LEAVE = 'agentParticipantsLeave',
    COBROWSE_SESSIONS = 'coBrowseSessions',
    SUMMARY = 'summary',
    MONITORING = 'monitoring',
    DIALOGS = 'dialogs',
    RESPONSE_TIME = 'responseTime',
    INTENTS = 'intents',
    UNIQUE_INTENTS = 'uniqueIntents',
    LATEST_AGENT_SURVEY = 'latestAgentSurvey',
    PREVIOUSLY_SUBMITTED_AGENT_SURVEYS = 'previouslySubmittedAgentSurveys',
}