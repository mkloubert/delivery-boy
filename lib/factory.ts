/// <reference types="node" />

// delivery-boy (https://github.com/mkloubert/delivery-boy)
// Copyright (C) Marcel Joachim Kloubert <marcel.kloubert@gmx.net>
// 
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.


import * as dboy_client from './client/client';
import * as dboy_contracts from './contracts';

/**
 * Creates a new client instance.
 * 
 * @param {dboy_contracts.ClientConfig} [cfg] The configuration for the client.
 */
export function createClient(cfg?: dboy_contracts.ClientConfig): dboy_contracts.Client {
    return new dboy_client.Client(cfg);
}
