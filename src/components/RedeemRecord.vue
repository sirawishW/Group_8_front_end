<template>
  <div>
    <v-data-table 
    :sort-by.sync="sortBy"
    :sort-desc.sync="sortDesc"
    :headers="headers" :items="record" class="elevation-1">
    </v-data-table>
  </div>
</template>

<script>
import connectAPI from "@/services/connectAPI";
import moment from "moment";
export default {
  name: "leaderboard",
  data: () => ({
    current_user: [],
    record: [],
    sortBy : 'created_at',
    sortDesc: false,
    headers: [
      {
        text: "วันที่",
        align: "start",
        value: "created_at",
      },
      { text: "ของที่เเลก", value: "details" },
      { text: "คะเเนนที่ใช้", value: "point" },
    ],
  }),
  mounted() {
    if (window.localStorage.user) {
      this.current_user = JSON.parse(window.localStorage.user);
    }
    this.getData();
  },
  methods: {
    async getData() {
      await connectAPI.getAPI("users/" + this.current_user.id).then((res) => {
        this.current_user = res.histories;
        for (var i = 0; i < res.histories.length; i++) {
            res.histories[i].created_at = moment(res.histories[i].created_at).format("MMMM Do YYYY, h:mm:ss a")
            this.record.push(res.histories[i]);
        }
        console.log(this.record);
      });
    },
  },
  computed: {},
};
</script>

<style lang="scss"scoped>
.body {
  background-color: #d5f3fe;
}
</style>