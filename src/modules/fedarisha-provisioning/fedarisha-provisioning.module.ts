import { Module } from '@nestjs/common';

import { AxiosModule } from '@common/axios';

import { FedarishaProvisioningEvents } from './fedarisha-provisioning.events';
import { FedarishaProvisioningRepository } from './fedarisha-provisioning.repository';
import { FedarishaProvisioningService } from './fedarisha-provisioning.service';
import { FedarishaSubscriptionService } from './fedarisha-subscription.service';

@Module({
    imports: [AxiosModule],
    providers: [
        FedarishaProvisioningRepository,
        FedarishaProvisioningService,
        FedarishaProvisioningEvents,
        FedarishaSubscriptionService,
    ],
    exports: [FedarishaProvisioningService, FedarishaSubscriptionService],
})
export class FedarishaProvisioningModule {}
