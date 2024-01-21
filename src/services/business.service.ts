/*
Copyright 2023 VirtualYou

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

business.service.ts - Business service utilizing API
@author David L Whitehurst

*/

import axios from "axios";
import { CreateMember } from "../types.ts";
const BUSINESS_URL = import.meta.env.VITE_APP_BASEPATH + "/business/v1/";

/**
 * Class: BusinessService
 *
 * @remarks
 * This is a business service class that communicates with the business API for its
 * operations using Axios.
 *
 */
class BusinessService {

    /**
     * This is a method to create a new member (VirtualYou Newsletter Subscriber)
     *
     * @param obj - Member type
     * @remarks
     * using Axios
     * @returns Promise.
     */
    subscribeMember(obj: CreateMember) {
        console.log("in subscribeMember");
        return axios.post(BUSINESS_URL + 'members', obj, {
            params: {
                pi: '314159'
            }
        });
    }
}

export default new BusinessService();