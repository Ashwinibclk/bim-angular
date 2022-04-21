from enum import Enum


class SiteConfig(Enum):
    """Defines constants for site requests."""
    OPTIONAL_PARAM_KEYS = [
        "tierCreatorCapacity",
        "tierExplorerCapacity",
        "tierViewerCapacity",
        "storageQuota",
        "disableSubscriptions",
        "editingFlowsEnabled",
        "schedulingFlowsEnabled",
        "flowsEnabled",
        "guestAccessEnabled",
        "allowSubscriptionAttachments",
        "cacheWarmupEnabled",
        "commentingEnabled",
        "revisionHistoryEnabled",
        "revisionLimit",
        "subscribeOthersEnabled",
        "extractEncryptionMode",
        "requestAccessEnabled",
        "runNowEnabled",
        "dataAlertsEnabled",
        "commentingMentionsEnabled",
        "catalogObfuscationEnabled",
        "flowAutoSaveEnabled",
        "webExtractionEnabled",
        "metricsContentTypeEnabled",
        "notifySiteAdminsOnThrottle",
        "authoringEnabled",
        "customSubscriptionEmailEnabled",
        "customSubscriptionEmail",
        "customSubscriptionFooterEnabled",
        "customSubscriptionFooter",
        "askDataMode",
        "namedSharingEnabled",
        "mobileBiometricsEnabled",
        "sheetImageEnabled",
        "catalogingEnabled",
        "derivedPermissionsEnabled",
        "userVisibilityMode",
        "useDefaultTimeZone",
        "timeZone",
        "autoSuspendRefreshEnabled",
        "autoSuspendRefreshInactivityWindow",
    ]
    OPTIONAL_PARAM_VALUES = [
        "tier_creator_capacity",
        "tier_explorer_capacity",
        "tier_viewer_capacity",
        "storage_quota",
        "disable_subscriptions_flag",
        "editing_flows_enabled_flag",
        "scheduling_flows_enabled_flag",
        "flows_enabled_flag",
        "guest_access_enabled_flag",
        "allow_subscription_attachments_flag",
        "cache_warmup_enabled_flag",
        "commenting_enabled_flag",
        "revision_history_enabled_flag",
        "revision_limit",
        "subscribe_others_enabled_flag",
        "extract_encryption_mode",
        "request_access_enabled_flag",
        "run_now_enabled_flag",
        "data_alerts_enabled_flag",
        "commenting_mentions_enabled_flag",
        "catalog_obfuscation_enabled_flag",
        "flow_auto_save_enabled_flag",
        "web_extraction_enabled_flag",
        "metrics_content_type_enabled_flag",
        "notify_site_admins_on_throttle_flag",
        "authoring_enabled_flag",
        "custom_subscription_email_enabled_flag",
        "custom_subscription_email",
        "custom_subscription_footer_enabled_flag",
        "custom_subscription_footer",
        "ask_data_mode",
        "named_sharing_enabled_flag",
        "mobile_biometrics_enabled_flag",
        "sheet_image_enabled_flag",
        "cataloging_enabled_flag",
        "derived_permissions_enabled_flag",
        "user_visibility_mode",
        "use_default_time_zone_flag",
        "time_zone",
        "auto_suspend_refresh_enabled_flag",
        "auto_suspend_refresh_inactivity_window",
    ]