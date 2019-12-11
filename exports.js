// Export all available scans

module.exports = {
    aws : {
        'acmValidation'                 : require(__dirname + '/plugins/aws/acm/acmValidation.js'),
        'acmCertificateExpiry'          : require(__dirname + '/plugins/aws/acm/acmCertificateExpiry.js'),
        'asgMultiAz'                    : require(__dirname + '/plugins/aws/autoscaling/asgMultiAz.js'),
        'workgroupEncrypted'            : require(__dirname + '/plugins/aws/athena/workgroupEncrypted.js'),
        'workgroupEnforceConfiguration' : require(__dirname + '/plugins/aws/athena/workgroupEnforceConfiguration.js'),
        'publicS3Origin'                : require(__dirname + '/plugins/aws/cloudfront/publicS3Origin.js'),
        'secureOrigin'                  : require(__dirname + '/plugins/aws/cloudfront/secureOrigin.js'),
        'insecureProtocols'             : require(__dirname + '/plugins/aws/cloudfront/insecureProtocols.js'),
        'cloudfrontHttpsOnly'           : require(__dirname + '/plugins/aws/cloudfront/cloudfrontHttpsOnly.js'),
        'cloudfrontLoggingEnabled'      : require(__dirname + '/plugins/aws/cloudfront/cloudfrontLoggingEnabled.js'),
        'cloudfrontWafEnabled'          : require(__dirname + '/plugins/aws/cloudfront/cloudfrontWafEnabled.js'),

        'cloudtrailBucketAccessLogging' : require(__dirname + '/plugins/aws/cloudtrail/cloudtrailBucketAccessLogging.js'),
        'cloudtrailBucketDelete'        : require(__dirname + '/plugins/aws/cloudtrail/cloudtrailBucketDelete.js'),
        'cloudtrailEnabled'             : require(__dirname + '/plugins/aws/cloudtrail/cloudtrailEnabled.js'),
        'cloudtrailEncryption'          : require(__dirname + '/plugins/aws/cloudtrail/cloudtrailEncryption.js'),
        'cloudtrailFileValidation'      : require(__dirname + '/plugins/aws/cloudtrail/cloudtrailFileValidation.js'),
        'cloudtrailToCloudwatch'        : require(__dirname + '/plugins/aws/cloudtrail/cloudtrailToCloudwatch.js'),
        'cloudtrailBucketPrivate'       : require(__dirname + '/plugins/aws/cloudtrail/cloudtrailBucketPrivate.js'),

        'configServiceEnabled'          : require(__dirname + '/plugins/aws/configservice/configServiceEnabled.js'),

        'dynamoKmsEncryption'           : require(__dirname + '/plugins/aws/dynamodb/dynamoKmsEncryption.js'),

        'defaultSecurityGroup'          : require(__dirname + '/plugins/aws/ec2/defaultSecurityGroup.js'),
        'elasticIpLimit'                : require(__dirname + '/plugins/aws/ec2/elasticIpLimit.js'),
        'subnetIpAvailability'          : require(__dirname + '/plugins/aws/ec2/subnetIpAvailability.js'),
        'excessiveSecurityGroups'       : require(__dirname + '/plugins/aws/ec2/excessiveSecurityGroups.js'),
        'instanceLimit'                 : require(__dirname + '/plugins/aws/ec2/instanceLimit.js'),
        'instanceMaxCount'              : require(__dirname + '/plugins/aws/ec2/instanceMaxCount.js'),
        'instanceKeyBasedLogin'         : require(__dirname + '/plugins/aws/ec2/instanceKeyBasedLogin.js'),
        'openAllPortsProtocols'         : require(__dirname + '/plugins/aws/ec2/openAllPortsProtocols.js'),
        'openCIFS'                      : require(__dirname + '/plugins/aws/ec2/openCIFS.js'),
        'openDNS'                       : require(__dirname + '/plugins/aws/ec2/openDNS.js'),
        'openFTP'                       : require(__dirname + '/plugins/aws/ec2/openFTP.js'),
        'openHadoopNameNode'            : require(__dirname + '/plugins/aws/ec2/openHadoopNameNode.js'),
        'openHadoopNameNodeWebUI'       : require(__dirname + '/plugins/aws/ec2/openHadoopNameNodeWebUI.js'),
        'openKibana'                    : require(__dirname + '/plugins/aws/ec2/openKibana.js'),
        'openMySQL'                     : require(__dirname + '/plugins/aws/ec2/openMySQL.js'),
        'openOracle'                    : require(__dirname + '/plugins/aws/ec2/openOracle.js'),
        'openNetBIOS'                   : require(__dirname + '/plugins/aws/ec2/openNetBIOS.js'),
        'openPostgreSQL'                : require(__dirname + '/plugins/aws/ec2/openPostgreSQL.js'),
        'openRDP'                       : require(__dirname + '/plugins/aws/ec2/openRDP.js'),
        'openRPC'                       : require(__dirname + '/plugins/aws/ec2/openRPC.js'),
        'openSMBoTCP'                   : require(__dirname + '/plugins/aws/ec2/openSMBoTCP.js'),
        'openSMTP'                      : require(__dirname + '/plugins/aws/ec2/openSMTP.js'),
        'openSQLServer'                 : require(__dirname + '/plugins/aws/ec2/openSQLServer.js'),
        'openSSH'                       : require(__dirname + '/plugins/aws/ec2/openSSH.js'),
        'openTelnet'                    : require(__dirname + '/plugins/aws/ec2/openTelnet.js'),
        'openVNCClient'                 : require(__dirname + '/plugins/aws/ec2/openVNCClient.js'),
        'openVNCServer'                 : require(__dirname + '/plugins/aws/ec2/openVNCServer.js'),
        'openElasticsearch'             : require(__dirname + '/plugins/aws/ec2/openElasticsearch.js'),
        'vpcElasticIpLimit'             : require(__dirname + '/plugins/aws/ec2/vpcElasticIpLimit.js'),
        'classicInstances'              : require(__dirname + '/plugins/aws/ec2/classicInstances.js'),
        'flowLogsEnabled'               : require(__dirname + '/plugins/aws/ec2/flowLogsEnabled.js'),
        'vpcMultipleSubnets'            : require(__dirname + '/plugins/aws/ec2/multipleSubnets.js'),
        'overlappingSecurityGroups'     : require(__dirname + '/plugins/aws/ec2/overlappingSecurityGroups.js'),
        'publicAmi'                     : require(__dirname + '/plugins/aws/ec2/publicAmi.js'),
        'encryptedAmi'                  : require(__dirname + '/plugins/aws/ec2/encryptedAmi.js'),
        'instanceIamRole'               : require(__dirname + '/plugins/aws/ec2/instanceIamRole.js'),
        'ebsEncryptionEnabled'          : require(__dirname + '/plugins/aws/ec2/ebsEncryptionEnabled.js'),
        'natMultiAz'                    : require(__dirname + '/plugins/aws/ec2/natMultiAz.js'),
        'defaultVpcInUse'               : require(__dirname + '/plugins/aws/ec2/defaultVpcInUse.js'),
        'crossVpcPublicPrivate'         : require(__dirname + '/plugins/aws/ec2/crossVpcPublicPrivate.js'),
        'ebsEncryptedSnapshots'         : require(__dirname + '/plugins/aws/ec2/ebsEncryptedSnapshots.js'),

        'efsEncryptionEnabled'          : require(__dirname + '/plugins/aws/efs/efsEncryptionEnabled.js'),

        'ecrRepositoryPolicy'           : require(__dirname + '/plugins/aws/ecr/ecrRepositoryPolicy.js'),

        'eksKubernetesVersion'          : require(__dirname + '/plugins/aws/eks/eksKubernetesVersion.js'),
        'eksLoggingEnabled'             : require(__dirname + '/plugins/aws/eks/eksLoggingEnabled.js'),
        'eksPrivateEndpoint'            : require(__dirname + '/plugins/aws/eks/eksPrivateEndpoint.js'),
        'eksSecurityGroups'             : require(__dirname + '/plugins/aws/eks/eksSecurityGroups.js'),

        'insecureCiphers'               : require(__dirname + '/plugins/aws/elb/insecureCiphers.js'),
        'elbHttpsOnly'                  : require(__dirname + '/plugins/aws/elb/elbHttpsOnly.js'),
        'elbLoggingEnabled'             : require(__dirname + '/plugins/aws/elb/elbLoggingEnabled.js'),
        'elbNoInstances'                : require(__dirname + '/plugins/aws/elb/elbNoInstances.js'),
        'elbWafEnabled'                 : require(__dirname + '/plugins/aws/elb/elbWafEnabled.js'),

        'accessKeysExtra'               : require(__dirname + '/plugins/aws/iam/accessKeysExtra.js'),
        'accessKeysLastUsed'            : require(__dirname + '/plugins/aws/iam/accessKeysLastUsed.js'),
        'accessKeysRotated'             : require(__dirname + '/plugins/aws/iam/accessKeysRotated.js'),
        'certificateExpiry'             : require(__dirname + '/plugins/aws/iam/certificateExpiry.js'),
        'emptyGroups'                   : require(__dirname + '/plugins/aws/iam/emptyGroups.js'),
        'iamUserAdmins'                 : require(__dirname + '/plugins/aws/iam/iamUserAdmins.js'),
        'iamRolePolicies'               : require(__dirname + '/plugins/aws/iam/iamRolePolicies.js'),
        'maxPasswordAge'                : require(__dirname + '/plugins/aws/iam/maxPasswordAge.js'),
        'minPasswordLength'             : require(__dirname + '/plugins/aws/iam/minPasswordLength.js'),
        'noUserIamPolicies'             : require(__dirname + '/plugins/aws/iam/noUserIamPolicies.js'),
        'passwordExpiration'            : require(__dirname + '/plugins/aws/iam/passwordExpiration.js'),
        'passwordRequiresLowercase'     : require(__dirname + '/plugins/aws/iam/passwordRequiresLowercase.js'),
        'passwordRequiresNumbers'       : require(__dirname + '/plugins/aws/iam/passwordRequiresNumbers.js'),
        'passwordRequiresSymbols'       : require(__dirname + '/plugins/aws/iam/passwordRequiresSymbols.js'),
        'passwordRequiresUppercase'     : require(__dirname + '/plugins/aws/iam/passwordRequiresUppercase.js'),
        'passwordReusePrevention'       : require(__dirname + '/plugins/aws/iam/passwordReusePrevention.js'),
        'rootAccessKeys'                : require(__dirname + '/plugins/aws/iam/rootAccessKeys.js'),
        'rootAccountInUse'              : require(__dirname + '/plugins/aws/iam/rootAccountInUse.js'),
        'rootHardwareMfa'               : require(__dirname + '/plugins/aws/iam/rootHardwareMfa.js'),
        'rootMfaEnabled'                : require(__dirname + '/plugins/aws/iam/rootMfaEnabled.js'),
        'sshKeysRotated'                : require(__dirname + '/plugins/aws/iam/sshKeysRotated.js'),
        'usersMfaEnabled'               : require(__dirname + '/plugins/aws/iam/usersMfaEnabled.js'),
        'usersPasswordAndKeys'          : require(__dirname + '/plugins/aws/iam/usersPasswordAndKeys.js'),
        'usersPasswordLastUsed'         : require(__dirname + '/plugins/aws/iam/usersPasswordLastUsed.js'),
        'canaryKeysUsed'                : require(__dirname + '/plugins/aws/iam/canaryKeysUsed.js'),
        'kinesisEncrypted'              : require(__dirname + '/plugins/aws/kinesis/kinesisEncrypted.js'),
        'firehoseEncrypted'             : require(__dirname + '/plugins/aws/firehose/firehoseEncrypted.js'),
        'kmsKeyRotation'                : require(__dirname + '/plugins/aws/kms/kmsKeyRotation.js'),
        'kmsScheduledDeletion'          : require(__dirname + '/plugins/aws/kms/kmsScheduledDeletion.js'),
        'kmsKeyPolicy'                  : require(__dirname + '/plugins/aws/kms/kmsKeyPolicy.js'),
        'kmsDefaultKeyUsage'            : require(__dirname + '/plugins/aws/kms/kmsDefaultKeyUsage.js'),

        'rdsAutomatedBackups'           : require(__dirname + '/plugins/aws/rds/rdsAutomatedBackups.js'),
        'rdsEncryptionEnabled'          : require(__dirname + '/plugins/aws/rds/rdsEncryptionEnabled.js'),
        'rdsLoggingEnabled'             : require(__dirname + '/plugins/aws/rds/rdsLoggingEnabled.js'),
        'rdsPubliclyAccessible'         : require(__dirname + '/plugins/aws/rds/rdsPubliclyAccessible.js'),
        'rdsRestorable'                 : require(__dirname + '/plugins/aws/rds/rdsRestorable.js'),
        'rdsMultiAz'                    : require(__dirname + '/plugins/aws/rds/rdsMultiAz.js'),
        'rdsSnapshotEncryption'         : require(__dirname + '/plugins/aws/rds/rdsSnapshotEncryption.js'),

        'domainAutoRenew'               : require(__dirname + '/plugins/aws/route53/domainAutoRenew.js'),
        'domainExpiry'                  : require(__dirname + '/plugins/aws/route53/domainExpiry.js'),
        'domainTransferLock'            : require(__dirname + '/plugins/aws/route53/domainTransferLock.js'),

        'bucketAllUsersPolicy'          : require(__dirname + '/plugins/aws/s3/bucketAllUsersPolicy.js'),
        'bucketAllUsersAcl'             : require(__dirname + '/plugins/aws/s3/bucketAllUsersAcl.js'),
        'bucketVersioning'              : require(__dirname + '/plugins/aws/s3/bucketVersioning.js'),
        'bucketLogging'                 : require(__dirname + '/plugins/aws/s3/bucketLogging.js'),

        'notebookDataEncrypted'         : require(__dirname + '/plugins/aws/sagemaker/notebookDataEncrypted.js'),
        'notebookDirectInternetAccess'  : require(__dirname + '/plugins/aws/sagemaker/notebookDirectInternetAccess.js'),

        'dkimEnabled'                   : require(__dirname + '/plugins/aws/ses/dkimEnabled.js'),

        'topicPolicies'                 : require(__dirname + '/plugins/aws/sns/topicPolicies.js'),
        'sqsCrossAccount'               : require(__dirname + '/plugins/aws/sqs/sqsCrossAccount.js'),
        'sqsEncrypted'                  : require(__dirname + '/plugins/aws/sqs/sqsEncrypted.js'),

        'ssmEncryptedParameters'        : require(__dirname + '/plugins/aws/ssm/ssmEncryptedParameters.js'),

        'lambdaOldRuntimes'             : require(__dirname + '/plugins/aws/lambda/lambdaOldRuntimes.js'),
        'lambdaVpcConfig'               : require(__dirname + '/plugins/aws/lambda/lambdaVpcConfig.js'),
        'lambdaPublicAccess'            : require(__dirname + '/plugins/aws/lambda/lambdaPublicAccess.js'),

        'monitoringMetrics'             : require(__dirname + '/plugins/aws/cloudwatchlogs/monitoringMetrics.js'),

        'redshiftEncryptionEnabled'     : require(__dirname + '/plugins/aws/redshift/redshiftEncryptionEnabled.js'),
        'redshiftPubliclyAccessible'    : require(__dirname + '/plugins/aws/redshift/redshiftPubliclyAccessible.js'),

        'transferLoggingEnabled'        : require(__dirname + '/plugins/aws/transfer/transferLoggingEnabled.js'),

        'shieldAdvancedEnabled'         : require(__dirname + '/plugins/aws/shield/shieldAdvancedEnabled.js'),
        'shieldEmergencyContacts'       : require(__dirname + '/plugins/aws/shield/shieldEmergencyContacts.js'),
        'shieldProtections'             : require(__dirname + '/plugins/aws/shield/shieldProtections.js'),

        'guardDutyEnabled'              : require(__dirname + '/plugins/aws/guardduty/guarddutyEnabled.js'),
        'guardDutyMaster'               : require(__dirname + '/plugins/aws/guardduty/guarddutyMaster.js'),
    },
    azure : {
        'fileServiceEncryption'         : require(__dirname + '/plugins/azure/storageaccounts/fileServiceEncryption.js'),
        'networkAccessDefaultAction'    : require(__dirname + '/plugins/azure/storageaccounts/networkAccessDefaultAction.js'),
        'storageAccountsHttps'          : require(__dirname + '/plugins/azure/storageaccounts/storageAccountsHttps.js'),
        'storageAccountsEncryption'     : require(__dirname + '/plugins/azure/storageaccounts/storageAccountsEncryption.js'),
        'logStorageEncryption'          : require(__dirname + '/plugins/azure/storageaccounts/logStorageEncryption.js'),
        'logContainerPublicAccess'      : require(__dirname + '/plugins/azure/storageaccounts/logContainerPublicAccess.js'),
        'blobServiceEncryption'         : require(__dirname + '/plugins/azure/storageaccounts/blobServiceEncryption.js'),
        'trustedMsAccessEnabled'        : require(__dirname + '/plugins/azure/storageaccounts/trustedMsAccessEnabled.js'),

        'keyExpirationEnabled'          : require(__dirname + '/plugins/azure/keyvaults/keyExpirationEnabled.js'),

        'blobContainersPrivateAccess'   : require(__dirname + '/plugins/azure/blobservice/blobContainersPrivateAccess.js'),
        'blobServiceImmutable'          : require(__dirname + '/plugins/azure/blobservice/blobServiceImmutable.js'),

        'managementLockEnabled'         : require(__dirname + '/plugins/azure/resources/managementLockEnabled.js'),

        'fileServiceAllAccessAcl'       : require(__dirname + '/plugins/azure/fileservice/fileServiceAllAccessAcl.js'),
        'tableServiceAllAccessAcl'      : require(__dirname + '/plugins/azure/tableservice/tableServiceAllAccessAcl.js'),
        'queueServiceAllAccessAcl'      : require(__dirname + '/plugins/azure/queueservice/queueServiceAllAccessAcl.js'),

        'multipleSubnets'               : require(__dirname + '/plugins/azure/virtualnetworks/multipleSubnets.js'),

        'vmInstanceLimit'               : require(__dirname + '/plugins/azure/virtualmachines/vmInstanceLimit.js'),
        'classicInstances'              : require(__dirname + '/plugins/azure/virtualmachines/classicInstances.js'),
        'vmAgentEnabled'                : require(__dirname + '/plugins/azure/virtualmachines/vmAgentEnabled.js'),
        'vmDiskOSEncryption'            : require(__dirname + '/plugins/azure/virtualmachines/vmDiskOSEncryption.js'),
        'vmDiskDataEncryption'          : require(__dirname + '/plugins/azure/virtualmachines/vmDiskDataEncryption.js'),
        'vmEndpointProtection'          : require(__dirname + '/plugins/azure/virtualmachines/vmEndpointProtection.js'),
        'vmAutoUpdateEnabled'           : require(__dirname + '/plugins/azure/virtualmachines/vmAutoUpdateEnabled.js'),
        'vmAvailabilitySetLimit'        : require(__dirname + '/plugins/azure/virtualmachines/vmAvailabilitySetLimit.js'),

        'lbLogAnalyticsEnabled'         : require(__dirname + '/plugins/azure/monitor/lbLogAnalyticsEnabled.js'),
        'kvLogAnalyticsEnabled'         : require(__dirname + '/plugins/azure/monitor/kvLogAnalyticsEnabled.js'),
        'nsgLogAnalyticsEnabled'        : require(__dirname + '/plugins/azure/monitor/nsgLogAnalyticsEnabled.js'),
        'logProfileArchiveData'         : require(__dirname + '/plugins/azure/monitor/logProfileArchiveData.js'),
        'logProfileRetentionPolicy'     : require(__dirname + '/plugins/azure/monitor/logProfileRetentionPolicy.js'),

        'securityPolicyAlertsEnabled'   : require(__dirname + '/plugins/azure/logalerts/securityPolicyAlertsEnabled.js'),
        'nsgLoggingEnabled'             : require(__dirname + '/plugins/azure/logalerts/nsgLoggingEnabled.js'),
        'sqlServerFirewallRuleEnabled'  : require(__dirname + '/plugins/azure/logalerts/sqlServerFirewallRuleEnabled.js'),
        'virtualNetworkRuleEnabled'     : require(__dirname + '/plugins/azure/logalerts/virtualNetworkRuleEnabled.js'),
        'securitySolutionLogging'       : require(__dirname + '/plugins/azure/logalerts/securitySolutionLogging.js'),

        'monitorEndpointProtection'     : require(__dirname + '/plugins/azure/securitycenter/monitorEndpointProtection.js'),
        'monitorBlobEncryption'         : require(__dirname + '/plugins/azure/securitycenter/monitorBlobEncryption.js'),
        'monitorSystemUpdates'          : require(__dirname + '/plugins/azure/securitycenter/monitorSystemUpdates.js'),

        'monitorJitNetworkAccess'       : require(__dirname + '/plugins/azure/securitycenter/monitorJitNetworkAccess.js'),
        'monitorVMVulnerability'        : require(__dirname + '/plugins/azure/securitycenter/monitorVMVulnerability.js'),
        'monitorSQLEncryption'          : require(__dirname + '/plugins/azure/securitycenter/monitorSqlEncryption.js'),
        'monitorSQLAuditing'            : require(__dirname + '/plugins/azure/securitycenter/monitorSqlAuditing.js'),
        'monitorDiskEncryption'         : require(__dirname + '/plugins/azure/securitycenter/monitorDiskEncryption.js'),
        'appWhitelistingEnabled'        : require(__dirname + '/plugins/azure/securitycenter/appWhitelistingEnabled.js'),
        'securityConfigMonitoring'      : require(__dirname + '/plugins/azure/securitycenter/securityConfigMonitoring.js'),
        'adminSecurityAlertsEnabled'    : require(__dirname + '/plugins/azure/securitycenter/adminSecurityAlertsEnabled.js'),
        'securityContactsEnabled'       : require(__dirname + '/plugins/azure/securitycenter/securityContactsEnabled.js'),
        'monitorNsgEnabled'             : require(__dirname + '/plugins/azure/securitycenter/monitorNsgEnabled.js'),

        'securitySolutionLogging'       : require(__dirname + '/plugins/azure/logalerts/securitySolutionLogging.js'),

        'resourceAllowedLocations'      : require(__dirname + '/plugins/azure/policyservice/resourceAllowedLocations.js'),
        'resourceLocationMatch'         : require(__dirname + '/plugins/azure/policyservice/resourceLocationMatch.js'),

        'enforceSSLConnection'          : require(__dirname + '/plugins/azure/mysqlserver/enforceSSLConnection.js'),

        'networkWatcherEnabled'         : require(__dirname + '/plugins/azure/networksecuritygroups/networkWatcherEnabled.js'),
        'denySSHAccess'                 : require(__dirname + '/plugins/azure/networksecuritygroups/denySSHAccess.js'),
        'excessiveSecurityGroups'       : require(__dirname + '/plugins/azure/networksecuritygroups/excessiveSecurityGroups.js'),
        'defaultSecurityGroup'          : require(__dirname + '/plugins/azure/networksecuritygroups/defaultSecurityGroup.js'),
        'openAllPorts'                  : require(__dirname + '/plugins/azure/networksecuritygroups/openAllPorts.js'),
        'openSMTP'                      : require(__dirname + '/plugins/azure/networksecuritygroups/openSMTP.js'),
        'openOracle'                    : require(__dirname + '/plugins/azure/networksecuritygroups/openOracle.js'),
        'openKibana'                    : require(__dirname + '/plugins/azure/networksecuritygroups/openKibana.js'),
        'openHadoopNameNode'            : require(__dirname + '/plugins/azure/networksecuritygroups/openHadoopNameNode.js'),
        'openHadoopNameNodeWebUI'       : require(__dirname + '/plugins/azure/networksecuritygroups/openHadoopNameNodeWebUI.js'),
        'openFTP'                       : require(__dirname + '/plugins/azure/networksecuritygroups/openFTP.js'),
        'openSSH'                       : require(__dirname + '/plugins/azure/networksecuritygroups/openSSH.js'),
        'openCIFS'                      : require(__dirname + '/plugins/azure/networksecuritygroups/openCIFS.js'),
        'openDNS'                       : require(__dirname + '/plugins/azure/networksecuritygroups/openDNS.js'),
        'openRDP'                       : require(__dirname + '/plugins/azure/networksecuritygroups/openRDP.js'),
        'openTelnet'                    : require(__dirname + '/plugins/azure/networksecuritygroups/openTelnet.js'),
        'openVNCServer'                 : require(__dirname + '/plugins/azure/networksecuritygroups/openVNCServer.js'),
        'openVNCClient'                 : require(__dirname + '/plugins/azure/networksecuritygroups/openVNCClient.js'),
        'openMySQL'                     : require(__dirname + '/plugins/azure/networksecuritygroups/openMySQL.js'),
        'openNetBIOS'                   : require(__dirname + '/plugins/azure/networksecuritygroups/openNetBIOS.js'),
        'openPostgreSQL'                : require(__dirname + '/plugins/azure/networksecuritygroups/openPostgreSQL.js'),
        'openRPC'                       : require(__dirname + '/plugins/azure/networksecuritygroups/openRPC.js'),
        'openSMBoTCP'                   : require(__dirname + '/plugins/azure/networksecuritygroups/openSMBoTCP.js'),
        'openSQLServer'                 : require(__dirname + '/plugins/azure/networksecuritygroups/openSQLServer.js'),

        'resourceUsageLimit'            : require(__dirname + '/plugins/azure/resources/resourceUsageLimit.js'),

        'advancedDataSecurityEnabled'   : require(__dirname + '/plugins/azure/sqlserver/advancedDataSecurityEnabled.js'),
        'tdeProtectorEncrypted'         : require(__dirname + '/plugins/azure/sqlserver/tdeProtectorEncrypted.js'),
        'noPublicAccess'                : require(__dirname + '/plugins/azure/sqlserver/noPublicAccess.js'),

        'javaVersion'                   : require(__dirname + '/plugins/azure/appservice/javaVersion.js'),
        'phpVersion'                    : require(__dirname + '/plugins/azure/appservice/phpVersion.js'),
        'pythonVersion'                 : require(__dirname + '/plugins/azure/appservice/pythonVersion.js'),
        'clientCertEnabled'             : require(__dirname + '/plugins/azure/appservice/clientCertEnabled.js'),
        'netFrameworkVersion'           : require(__dirname + '/plugins/azure/appservice/netFrameworkVersion.js'),
        'authEnabled'                   : require(__dirname + '/plugins/azure/appservice/authEnabled.js'),
        'identityEnabled'               : require(__dirname + '/plugins/azure/appservice/identityEnabled.js'),
        'http20Enabled'                 : require(__dirname + '/plugins/azure/appservice/http20Enabled.js'),
        'httpsOnlyEnabled'              : require(__dirname + '/plugins/azure/appservice/httpsOnlyEnabled.js'),
        'tlsVersionCheck'               : require(__dirname + '/plugins/azure/appservice/tlsVersionCheck.js'),

        'rbacEnabled'                   : require(__dirname + '/plugins/azure/kubernetesservice/rbacEnabled.js'),

        'endpointLoggingEnabled'        : require(__dirname + '/plugins/azure/cdnprofiles/endpointLoggingEnabled.js'),
        'detectInsecureCustomOrigin'    : require(__dirname + '/plugins/azure/cdnprofiles/detectInsecureCustomOrigin.js'),

        'unmanagedDiskEncryption'       : require(__dirname + '/plugins/azure/disks/unmanagedDiskEncryption.js'),

        'dbAuditingEnabled'             : require(__dirname + '/plugins/azure/sqldatabases/dbAuditingEnabled.js'),
        'sqlDbMultiAz'                  : require(__dirname + '/plugins/azure/sqldatabases/sqlDbMultiAz.js'),
        'dbRestorable'                  : require(__dirname + '/plugins/azure/sqldatabases/dbRestorable.js'),
        'lbHttpsOnly'                   : require(__dirname + '/plugins/azure/loadbalancer/lbHttpsOnly.js'),
        'lbNoInstances'                 : require(__dirname + '/plugins/azure/loadbalancer/lbNoInstances.js'),

    'kvRecoveryEnabled'             : require(__dirname + '/plugins/azure/keyvault/kvRecoveryEnabled.js'),
    },
    github: {
        'publicKeysRotated'             : require(__dirname + '/plugins/github/users/publicKeysRotated.js'),
        'gpgKeysRotated'                : require(__dirname + '/plugins/github/users/gpgKeysRotated.js'),
        'userMfaEnabled'                : require(__dirname + '/plugins/github/users/userMfaEnabled.js'),
        'userPrivateEmails'             : require(__dirname + '/plugins/github/users/userPrivateEmails.js'),
        'orgPlanLimit'                  : require(__dirname + '/plugins/github/orgs/orgPlanLimit.js'),
        'orgDefaultPermission'          : require(__dirname + '/plugins/github/orgs/orgDefaultPermission.js'),
        'orgMfaRequired'                : require(__dirname + '/plugins/github/orgs/orgMfaRequired.js'),
        'orgExcessiveOwners'            : require(__dirname + '/plugins/github/orgs/orgExcessiveOwners.js'),
        'repoDeployKeysRotated'         : require(__dirname + '/plugins/github/repos/repoDeployKeysRotated.js'),
        'repoOutsideCollaborators'      : require(__dirname + '/plugins/github/repos/repoOutsideCollaborators.js')
    },
    oracle: {
        'instanceMonitoringEnabled'     : require(__dirname + '/plugins/oracle/compute/instanceMonitoringEnabled.js'),
        'autoscaleEnabled'              : require(__dirname + '/plugins/oracle/compute/autoscaleEnabled.js'),
        'instancePoolMultiAD'           : require(__dirname + '/plugins/oracle/compute/instancePoolMultiAD.js'),
        'instanceMaxCount'              : require(__dirname + '/plugins/oracle/compute/instanceMaxCount.js'),
        'bootVolumeTransitEncryption'   : require(__dirname + '/plugins/oracle/compute/bootVolumeTransitEncryption.js'),
        'bootVolumeRestorable'          : require(__dirname + '/plugins/oracle/compute/bootVolumeRestorable.js'),
        'bootVolumeBackupEnabled'       : require(__dirname + '/plugins/oracle/compute/bootVolumeBackupEnabled.js'),

        'usersMfaEnabled'               : require(__dirname + '/plugins/oracle/identity/usersMfaEnabled.js'),
        'passwordRequiresLowercase'     : require(__dirname + '/plugins/oracle/identity/passwordRequiresLowercase.js'),
        'passwordRequiresNumbers'       : require(__dirname + '/plugins/oracle/identity/passwordRequiresNumbers.js'),
        'passwordRequiresSymbols'       : require(__dirname + '/plugins/oracle/identity/passwordRequiresSymbols.js'),
        'passwordRequiresUppercase'     : require(__dirname + '/plugins/oracle/identity/passwordRequiresUppercase.js'),
        'minPasswordLength'             : require(__dirname + '/plugins/oracle/identity/minPasswordLength.js'),
        'emptyGroups'                   : require(__dirname + '/plugins/oracle/identity/emptyGroups.js'),
        'excessivePolicies'             : require(__dirname + '/plugins/oracle/identity/excessivePolicies.js'),
        'excessivePolicyStatements'     : require(__dirname + '/plugins/oracle/identity/excessivePolicyStatements.js'),

        'openSSH'                       : require(__dirname + '/plugins/oracle/networking/openSSH.js'),
        'openOracleAutoDataWarehouse'   : require(__dirname + '/plugins/oracle/networking/openOracleAutoDataWarehouse.js'),
        'openAllPortsProtocols'         : require(__dirname + '/plugins/oracle/networking/openAllPortsProtocols.js'),
        'openRPC'                       : require(__dirname + '/plugins/oracle/networking/openRPC.js'),
        'openRDP'                       : require(__dirname + '/plugins/oracle/networking/openRDP.js'),
        'openVNCServer'                 : require(__dirname + '/plugins/oracle/networking/openVNCServer.js'),
        'openVNCClient'                 : require(__dirname + '/plugins/oracle/networking/openVNCClient.js'),
        'openTelnet'                    : require(__dirname + '/plugins/oracle/networking/openTelnet.js'),
        'openSMBoTCP'                   : require(__dirname + '/plugins/oracle/networking/openSMBoTCP.js'),
        'openOracle'                    : require(__dirname + '/plugins/oracle/networking/openOracle.js'),
        'openPostgreSQL'                : require(__dirname + '/plugins/oracle/networking/openPostgreSQL.js'),
        'openNetBIOS'                   : require(__dirname + '/plugins/oracle/networking/openNetBIOS.js'),
        'openMySQL'                     : require(__dirname + '/plugins/oracle/networking/openMySQL.js'),
        'openFTP'                       : require(__dirname + '/plugins/oracle/networking/openFTP.js'),
        'openCIFS'                      : require(__dirname + '/plugins/oracle/networking/openCIFS.js'),
        'openDNS'                       : require(__dirname + '/plugins/oracle/networking/openDNS.js'),
        'openSQLServer'                 : require(__dirname + '/plugins/oracle/networking/openSQLServer.js'),
        'openHadoopNameNode'            : require(__dirname + '/plugins/oracle/networking/openHadoopNameNode.js'),
        'openHadoopNameNodeWebUI'       : require(__dirname + '/plugins/oracle/networking/openHadoopNameNodeWebUI.js'),
        'openKibana'                    : require(__dirname + '/plugins/oracle/networking/openKibana.js'),
        'openSMTP'                      : require(__dirname + '/plugins/oracle/networking/openSMTP.js'),

        'statelessSecurityRules'        : require(__dirname + '/plugins/oracle/networking/statelessSecurityRules.js'),
        'defaultSecurityList'           : require(__dirname + '/plugins/oracle/networking/defaultSecurityList.js'),
        'excessiveSecurityLists'        : require(__dirname + '/plugins/oracle/networking/excessiveSecurityLists.js'),
        'lbHttpsOnly'                   : require(__dirname + '/plugins/oracle/networking/lbHttpsOnly.js'),
        'lbNSGEnabled'                  : require(__dirname + '/plugins/oracle/networking/lbNSGEnabled.js'),
        'lbNoInstances'                 : require(__dirname + '/plugins/oracle/networking/lbNoInstances.js'),
        'wafPublicIpEnabled'            : require(__dirname + '/plugins/oracle/networking/wafPublicIpEnabled.js'),

        'multipleSubnets'               : require(__dirname + '/plugins/oracle/networking/multipleSubnets.js'),
        'subnetMultiAd'                 : require(__dirname + '/plugins/oracle/networking/subnetMultiAd.js'),

        'bucketPublicAccessType'        : require(__dirname + '/plugins/oracle/objectstore/bucketPublicAccessType.js'),
        'preAuthRequestsExpiry'         : require(__dirname + '/plugins/oracle/objectstore/preAuthRequestsExpiry.js'),
        'preAuthRequestsAccess'         : require(__dirname + '/plugins/oracle/objectstore/preAuthRequestsAccess.js'),

        'nfsPublicAccess'               : require(__dirname + '/plugins/oracle/filestorage/nfsPublicAccess.js'),

        'dbBackupEnabled'               : require(__dirname + '/plugins/oracle/database/dbBackupEnabled.js'),
        'dbPrivateSubnetOnly'           : require(__dirname + '/plugins/oracle/database/dbPrivateSubnetOnly.js'),
        'dbNSGEnabled'                  : require(__dirname + '/plugins/oracle/database/dbNSGEnabled.js'),

        'blockVolumeRestorable'         : require(__dirname + '/plugins/oracle/blockstorage/blockVolumeRestorable.js'),
        'blockVolumeBackupEnabled'      : require(__dirname + '/plugins/oracle/blockstorage/blockVolumeBackupEnabled.js'),
        'volumeGroupsRestorable'        : require(__dirname + '/plugins/oracle/blockstorage/volumeGroupsRestorable.js'),

        'logRetentionPeriod'            : require(__dirname + '/plugins/oracle/audit/logRetentionPeriod.js'),
    },
    google: {
        'excessiveFirewallRules'        : require(__dirname + '/plugins/google/vpcnetwork/excessiveFirewallRules.js'),
        'openDNS'                       : require(__dirname + '/plugins/google/vpcnetwork/openDNS.js'),
        'openSSH'                       : require(__dirname + '/plugins/google/vpcnetwork/openSSH.js'),
        'openCIFS'                      : require(__dirname + '/plugins/google/vpcnetwork/openCIFS.js'),
        'openAllPorts'                  : require(__dirname + '/plugins/google/vpcnetwork/openAllPorts.js'),
        'openFTP'                       : require(__dirname + '/plugins/google/vpcnetwork/openFTP.js'),
        'openHadoopNameNode'            : require(__dirname + '/plugins/google/vpcnetwork/openHadoopNameNode.js'),
        'openHadoopNameNodeWebUI'       : require(__dirname + '/plugins/google/vpcnetwork/openHadoopNameNodeWebUI.js'),
        'openKibana'                    : require(__dirname + '/plugins/google/vpcnetwork/openKibana.js'),
        'openMySQL'                     : require(__dirname + '/plugins/google/vpcnetwork/openMySQL.js'),
        'openNetBIOS'                   : require(__dirname + '/plugins/google/vpcnetwork/openNetBIOS.js'),
        'openOracle'                    : require(__dirname + '/plugins/google/vpcnetwork/openOracle.js'),
        'openPostgreSQL'                : require(__dirname + '/plugins/google/vpcnetwork/openPostgreSQL.js'),
        'openRDP'                       : require(__dirname + '/plugins/google/vpcnetwork/openRDP.js'),
        'openRPC'                       : require(__dirname + '/plugins/google/vpcnetwork/openRPC.js'),
        'openSMBoTCP'                   : require(__dirname + '/plugins/google/vpcnetwork/openSMBoTCP.js'),
        'openSMTP'                      : require(__dirname + '/plugins/google/vpcnetwork/openSMTP.js'),
        'openSQLServer'                 : require(__dirname + '/plugins/google/vpcnetwork/openSQLServer.js'),
        'openTelnet'                    : require(__dirname + '/plugins/google/vpcnetwork/openTelnet.js'),
        'openVNCClient'                 : require(__dirname + '/plugins/google/vpcnetwork/openVNCClient.js'),
        'openVNCServer'                 : require(__dirname + '/plugins/google/vpcnetwork/openVNCServer.js'),
        'openOracleAutoDataWarehouse'   : require(__dirname + '/plugins/google/vpcnetwork/openOracleAutoDataWarehouse.js'),
        'multipleSubnets'               : require(__dirname + '/plugins/google/vpcnetwork/multipleSubnets.js'),
        'defaultVpcInUse'               : require(__dirname + '/plugins/google/vpcnetwork/defaultVpcInUse.js'),
        'flowLogsEnabled'               : require(__dirname + '/plugins/google/vpcnetwork/flowLogsEnabled.js'),

        'instanceMaxCount'              : require(__dirname + '/plugins/google/compute/instanceMaxCount.js'),
        'instancesMultiAz'              : require(__dirname + '/plugins/google/compute/instancesMultiAz.js'),
        'autoscaleEnabled'              : require(__dirname + '/plugins/google/compute/autoscaleEnabled.js'),

        'keyRotation'                   : require(__dirname + '/plugins/google/cryptographickeys/keyRotation.js'),

        'dbRestorable'                  : require(__dirname + '/plugins/google/sql/dbRestorable.js'),
        'dbAutomatedBackups'            : require(__dirname + '/plugins/google/sql/dbAutomatedBackups.js'),
        'dbMultiAz'                     : require(__dirname + '/plugins/google/sql/dbMultiAz.js'),
        'dbPubliclyAccessible'          : require(__dirname + '/plugins/google/sql/dbPubliclyAccessible.js'),

        'bucketVersioning'              : require(__dirname + '/plugins/google/storage/bucketVersioning.js'),
        'bucketLogging'                 : require(__dirname + '/plugins/google/storage/bucketLogging.js'),

        'clbHttpsOnly'                  : require(__dirname + '/plugins/google/clb/clbHttpsOnly.js'),
        'clbNoInstances'                : require(__dirname + '/plugins/google/clb/clbNoInstances.js'),

        'serviceLimits'                 : require(__dirname + '/plugins/google/iam/serviceLimits.js'),

        'privateEndpoint'               : require(__dirname + '/plugins/google/kubernetes/privateEndpoint.js'),
        'monitoringEnabled'             : require(__dirname + '/plugins/google/kubernetes/monitoringEnabled.js'),
    }
};

module.exports.aws = {
    'guardDutyEnabled': module.exports.aws.guardDutyEnabled,
}