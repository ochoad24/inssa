<template>
    <div>
        <vx-card title="Listado de pagos">
            <div id="data-list-list-view" class="data-list-container">
                <vs-table :data="notifications">
                    <template slot="thead">
                        <vs-th sort-key="message">Mensaje</vs-th>
                        <vs-th sort-key="created_at">Fecha de creación</vs-th>
                    </template>
                    <template slot-scope="{ data }">
                        <vs-tr
                            :key="ntf.id"
                            v-for="ntf in data"
                        >
                            <vs-td>{{
                                ntf.message
                            }}</vs-td>
                            <vs-td>{{
                                convertDate(ntf.created_at)
                            }}</vs-td>
                        </vs-tr>
                    </template>
                </vs-table>
            </div>
            <br />
            <vs-pagination
                :total="pagination.total"
                v-model="pagination.current"
                @change="getNotifications"
            ></vs-pagination>
        </vx-card>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            notifications:[],
            pagination: {
                total: 1,
                current: 1
            }
        };
    },
};
</script>
